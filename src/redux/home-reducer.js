import { getBudgetProgress, getBusinessProgress } from "../api/api";

// Constants
const TOGGLE_FETCHING = 'home/TOGGLE_FETCHING';
const SET_DATA = 'home/SET_DATA', SET_FULL_SUM = 'SET_FULL_SUM';

// Initial state
let initialState = {
    progress: [], // {'title': 'Доходы', value: 30000} and ... same
    fullSum: 0,
    isFetching: true
}

// Reducer
const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DATA:
            return {
                ...state,
                progress: [
                    ...action.data
                ]
            }
        case SET_FULL_SUM:
            return {
                ...state,
                fullSum: action.sum
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetch
            }
        default:
            return state
    }
}

//Actions
const setProressData = (data) => ({type: SET_DATA, data});
const toggleFetching = (isFetch) => ({type: TOGGLE_FETCHING, isFetch});
const setFullSum = (sum) => ({type: SET_FULL_SUM, sum})

// Thunks
export const getProgressData = () => async (dispatch) => {
    let budgetResponse = await getBudgetProgress();
    let businessResponse = await getBusinessProgress();

    setTimeout(async () => {
        let incomeProgress = 0, costsProgress = 0;
        let doneTasks = 0, undoneTasks = 0;
        
        console.log(businessResponse)

        await budgetResponse.income.forEach(i => {
            incomeProgress += i.sum
        });

        await budgetResponse.costs.forEach(i => {
            costsProgress += i.sum
        });

        await businessResponse.forEach(i => {
            i.data.forEach(j => {
                if(j.done) doneTasks++
                else undoneTasks++
            })
        });

        let tasks = doneTasks + undoneTasks;
        let sum = incomeProgress + costsProgress;

        let data = [
            {title: 'Лист дел', data: [
                {value: Math.round(undoneTasks / tasks * 100), title: 'Незавершенные задачи', color: '#DCDCDC'},
                {value: Math.round(doneTasks / tasks *  100), title: 'Завершенные задачи', color: '#EB5757'}
            ]},
            {title: 'Бюджет', data: [
                {value: Math.round(costsProgress / sum * 100), title: 'Расходы', color: '#F2994A'},
                {value: Math.round(incomeProgress / sum *  100), title: 'Доходы', color: '#56CCF2'}
            ]}
        ];

        dispatch(setProressData(data));
        dispatch(setFullSum(sum));
        dispatch(toggleFetching(false));
    }, 1000) 
}

export default homeReducer;