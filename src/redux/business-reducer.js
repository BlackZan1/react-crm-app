import { getBusinessData } from "../api/api";

// Constants
const ADD_DATA = 'business/ADD-DATA', ADD_TAG = 'ADD_TAG', ADD_TAG_TASK = 'ADD_TAG_TASK';
const DELETE_TAG = 'DELETE_TAG', DELETE_TAG_TASK = 'DELETE_TAG_TASK';
const TOGGLE_FETCHING = 'business/TOGGLE_FETCHING';
const SET_TASK_DONE = 'SET_TASK_DONE', SET_TAG_NAME = 'SET_TAG_NAME';

// I. State
let initialState = {
    tasks: [],
    isFetching: true
}

// Reducer
const businessReducer = (state = initialState, action) => {
    let updateStateTasks;

    switch(action.type) {
        case ADD_DATA:
            return {
                ...state,
                tasks: [...action.data]
            }
        case ADD_TAG:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.newTag
                ]
            }
        case ADD_TAG_TASK:
            updateStateTasks = [...state.tasks];

            updateStateTasks.forEach(i => {
                if(i._id === action.tagData.id) i.data.push(action.tagData.data)
            })

            return {
                ...state,
                tasks: [
                    ...updateStateTasks
                ]
            }
        case DELETE_TAG:
            updateStateTasks = [...state.tasks].filter(i => i._id !== action.tagId);

            return {
                ...state,
                tasks: [
                    ...updateStateTasks
                ]
            }
        case DELETE_TAG_TASK:
            updateStateTasks = [...state.tasks];

            updateStateTasks.forEach(i => {
                if(i._id === action.deleteData.tagId) {
                    i.data = [...i.data].filter(t => t._id !== action.deleteData.taskId);
                }
            })

            return {
                ...state,
                tasks: [
                    ...updateStateTasks
                ]
            }
        case SET_TASK_DONE:
            updateStateTasks = [...state.tasks];

            updateStateTasks.forEach(i => {
                if(i._id === action.tagData.tagId) {
                    i.data.forEach(j => {
                        if(j._id === action.tagData.taskId) j.done = !j.done
                    })
                }
            })

            return {
                ...state,
                tasks: [
                    ...updateStateTasks
                ]
            }
        case SET_TAG_NAME:
            updateStateTasks = [...state.tasks];

            updateStateTasks.forEach(i => {
                if(i._id === action.tagData.id) i.name = action.tagData.title
            })

            return {
                ...state,
                tasks: [
                    ...updateStateTasks
                ]
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
const setDataAction = (data) => ({type: ADD_DATA, data});
export const addTagTaskAction = (id, data) => ({type: ADD_TAG_TASK, tagData: {id, data}});
export const addTagAction = (data) => ({type: ADD_TAG, newTag: {...data}});
export const deleteTagAction = (tagId) => ({type: DELETE_TAG, tagId});
export const deleteTagTaskAction = (tagId, taskId) => ({type: DELETE_TAG_TASK, deleteData: {tagId, taskId}});
const toggleFetching = (isFetch) => ({type: TOGGLE_FETCHING, isFetch});
export const setTaskDoneAction = (tagId, taskId) => ({type: SET_TASK_DONE, tagData: {tagId, taskId}});
export const setTagNameAction = (id, title) => ({type: SET_TAG_NAME, tagData: {id, title}});

// Thunk Actions
export const getBusinessDataAction = () => async (dispatch) => {
    let res = await getBusinessData();

    setTimeout(() => {
        dispatch(setDataAction(res.business.tasks));
        dispatch(toggleFetching(false));
    }, 1000)
}

// Export
export default businessReducer;