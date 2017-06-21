import C from '../constants';
import { combineReducers } from 'redux';

export const currentUser = (state = null, action) =>
    (action.type === C.SET_CURRENT_USER) ? action.payload : state;

const singleReducer = combineReducers({
    currentUser
});

export default singleReducer;
