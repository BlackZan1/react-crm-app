import { createSelector } from 'reselect';

const getProgress = (state) => state.dataHome.progress;

const getUserInfo = (state) => state.dataUser.user

const getFetching = (state) => state.dataHome.isFetching;


export const getHomeSelector = createSelector(
    getProgress,
    getFetching,
    getUserInfo,
    (progress, isFetching, user) => ({progress, isFetching, user})
)