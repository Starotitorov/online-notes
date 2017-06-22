import C from './constants';
import fetch from 'isomorphic-fetch';

const LOCAL_STORAGE_KEY = 'online-notes-token';
const API_URL = process.env.API_URL;

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
        });
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
        });
};
