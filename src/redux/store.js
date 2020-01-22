import { createStore, combineReducers } from 'redux';
import budgetReducer from './budget-reducer';
import userReducer from './user-reducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import businessReducer from './business-reducer';
import homeReducer from './home-reducer';

const allReducers = combineReducers({
    dataBudget: budgetReducer,
    dataBusiness: businessReducer,
    dataHome: homeReducer,
    dataUser: userReducer
});

const store = createStore(allReducers, applyMiddleware(thunk));
window.store = store;

export default store;