import { createSelector } from 'reselect';

const getTasks = (state) => state.dataBusiness.tasks;

const getFetchingSuccess = (state) => state.dataBusiness.isFetching;

export const getBusinessSelector = createSelector(
    getTasks,
    getFetchingSuccess,
    (tasks, isFetching) => ({tasks, isFetching})
)