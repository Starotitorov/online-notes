import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

export default (initialState = {}) =>
    applyMiddleware(
        thunk,
        routerMiddleware(hashHistory)
    )(createStore)(appReducer, initialState);

