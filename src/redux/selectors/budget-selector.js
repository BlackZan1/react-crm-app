import { createSelector } from 'reselect';

const getBudget = (state) => state.dataBudget.budget;

const getIncomeHistory = (state) => state.dataBudget.history.income;

const getCostsHistory = (state) => state.dataBudget.history.costs;

const getFetchingSuccess = (state) => state.dataBudget.isFetching;

export const getBudgetSelector = createSelector(
    getBudget,
    getIncomeHistory,
    getCostsHistory,
    getFetchingSuccess,
    (budget, income, costs, isFetching) => ({budget, income, costs, isFetching})
)
