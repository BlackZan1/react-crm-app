import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../components/HomePage/index';
import BudgetPage from '../components/BudgetPage/index';
import BusinessPage from '../components/BusinessPage/index.tsx';

const BASE_URL = '/react-crm-app';

export const useRoutes = (isAuth) => {
    if(isAuth) {
        return (
            <Switch>
                <Route exact path={`${BASE_URL}/home`}>
                    <HomePage />
                </Route>

                <Route exact path={`${BASE_URL}/budget`}>
                    <BudgetPage />
                </Route>

                <Route exact path={`${BASE_URL}/business`}>
                    <BusinessPage />
                </Route>

                <Redirect to={`${BASE_URL}/home`} />
            </Switch>
        )
    }

    return null
}