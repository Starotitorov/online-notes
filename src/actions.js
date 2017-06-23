import C from './constants';
import fetch from './utils/fetch';
import { push } from 'react-router-redux';

const LOCAL_STORAGE_KEY = 'online-notes-token';
const API_URL = process.env.API_URL;

const handleError = (dispatch, response) => {
    if (typeof response.json !== 'function') {
        return dispatch(addError('Unknown error!'));
    }

    response.json()
        .then((json) => {
            dispatch(addError(json.error));
        });
};

export const signInUser = (data) => (dispatch, getState) => {
    fetch(`${API_URL}/api/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(({ user, token }) => {
            localStorage.setItem(LOCAL_STORAGE_KEY, token);

            dispatch({
                type: C.SET_CURRENT_USER,
                payload: user
            });

            dispatch(push('/'));
        })
        .catch(response => handleError(dispatch, response));
};

export const signUpUser = (data) => (dispatch, getState) => {
    fetch(`${API_URL}/api/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(({ user, token }) => {
            localStorage.setItem(LOCAL_STORAGE_KEY, token);

            dispatch({
                type: C.SET_CURRENT_USER,
                payload: user
            });

            dispatch(push('/'));
        })
        .catch(response => handleError(dispatch, response));
};

export const addError = (message) =>
    ({
        type: C.ADD_ERROR,
        payload: message
    });

export const clearError = (index) =>
    ({
        type: C.CLEAR_ERROR,
        payload: index
    });
