import { createSelector } from 'reselect';

const getAuth = (state) => state.dataUser.isAuth;

export const getAppSelector = createSelector(
    getAuth,
    (isAuth) => ({isAuth})
)