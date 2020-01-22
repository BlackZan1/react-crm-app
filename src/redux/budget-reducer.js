import { getBudgetData } from "../api/api";

// Constants
const SET_DATA = 'budget/SET_DATA', ADD_COST = 'ADD_COST', ADD_INCOME = 'ADD_INCOME';
const COUNT_COSTS = 'COUNT_COSTS', COUNT_INCOME = 'COUNT_INCOME';
const TOGGLE_FETCHING = 'budget/TOGGLE_FETCHING';

// State
let initialState = {
    budget: 0,
    history: {
        income: [],
        costs: []
    },
    isFetching: true
}

// Reducer
const budgetReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DATA:
            return {
                ...state,
                budget: action.data.sum,
                history: {
                    income: [...action.data.income],
                    costs: [...action.data.costs]
                }
            }
        case COUNT_COSTS: 
            return {
                ...state,
                budget: +state.budget - +action.count
            }
        case COUNT_INCOME:
            return {
                ...state,
                budget: +state.budget + +action.count
            }
        case ADD_COST:
            return {
                ...state,
                history: {
                    ...state.history,
                    costs: [...state.history.costs, action.costsItem]
                }
            }
        case ADD_INCOME:
            return {
                ...state,
                history: {
                    ...state.history,
                    income: [...state.history.income, action.incomeItem]
                }
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetch
            }
        default:
            return state;
    }
}

// Actions
const addCostsAction = (costsItem) => ({type: ADD_COST, costsItem});
const addIncomeAction = (incomeItem) => ({type: ADD_INCOME, incomeItem});
const countCostsAction = (count) => ({type: COUNT_COSTS, count});
const countIncomeAction = (count) => ({type: COUNT_INCOME, count});
const toggleFetching = (isFetch) => ({type: TOGGLE_FETCHING, isFetch});
const setDataAction = ({sum, income, costs}) => ({type: SET_DATA, data: {sum, income, costs}});

// Thunk Actions
export const getBudgetDataAction = () => async (dispatch) => {
    let res = await getBudgetData();

    setTimeout(() => {
        dispatch(setDataAction(res.budget));
        dispatch(toggleFetching(false));
    }, 1000)
}

export const addIncomeItemAction = ({title, color, sum, course = 'ru'}) => (dispatch) => {
    let randId = function () {
        return 'n' + Math.random().toString(36).substr(2, 9);   
    };
    
    let item = {
        _id: randId(),
        title,
        color,
        sum,
        course
    }

    dispatch(addIncomeAction(item));
    dispatch(countIncomeAction(sum));
}

export const addCostsItemAction = ({title, color, sum, course = 'ru'}) => (dispatch) => {
    let randId = function () {
        return 'c' + Math.random().toString(36).substr(2, 9);   
    };
    
    let item = {
        _id: randId(),
        title,
        color,
        sum,
        course
    }

    dispatch(addCostsAction(item));
    dispatch(countCostsAction(sum));
}

// Export
export default budgetReducer;