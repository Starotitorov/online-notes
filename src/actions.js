import C from './constants';

export const setCurrentUser = (user) =>
    ({
        type: C.SET_CURRENT_USER,
        payload: user
    });
