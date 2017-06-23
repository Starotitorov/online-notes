import C from '../constants';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

export const currentUser = (state = null, action) =>
    (action.type === C.SET_CURRENT_USER) ? action.payload : state;

export const errors = (state=[], action) => {
    switch (action.type) {
        case C.ADD_ERROR:
            return [
                ...state,
                action.payload
            ];
        case C.CLEAR_ERROR:
            return state.filter((error, index) => index !== action.payload);
        default:
            return state;
    }
};

const singleReducer = combineReducers({
    currentUser,
    errors,
    routing: routerReducer
});

export default singleReducer;
