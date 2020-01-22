import { getUserData } from "../api/api";

const SET_USER_INFO = 'SET_USER_INFO';

let initialState = {
    user: {},
    isAuth: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                user: {...action.data.user},
                isAuth: action.data.isAuth
            }
        default:
            return state;
    }
}

const setUserInfoAction = (data) => ({type: SET_USER_INFO, data});

export const getUserInfoAction = () => async (dispatch) => {
    let res = await getUserData();
    
    setTimeout(() => {
        dispatch(setUserInfoAction(res));
    }, 2000)
} 

export default userReducer;