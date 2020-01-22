import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../components/HomePage/index';
import BudgetPage from '../components/BudgetPage/index';
import BusinessPage from '../components/BusinessPage/index.tsx';

export const useRoutes = (isAuth) => {
    if(isAuth) {
        return (
            <Switch>
                <Route exact path={'/home'}>
                    <HomePage />
                </Route>

                <Route exact path={'/budget'}>
                    <BudgetPage />
                </Route>

                <Route exact path={'/business'}>
                    <BusinessPage />
                </Route>

                <Redirect to={'/home'} />
            </Switch>
        )
    }

    return null
}