import { RSAA } from 'redux-api-middleware';

import constants from './constants';

export const login = (username, password) => ({
    [RSAA]: {
        endpoint: '/api/auth/token/obtain/',
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' },
        types: [
            constants.LOGIN_REQUEST, constants.LOGIN_SUCCESS, constants.LOGIN_FAILURE
        ]
    }
});

export const refreshAccessToken = (token) => ({
    [RSAA]: {
        endpoint: '/api/auth/token/refresh/',
        method: 'POST',
        body: JSON.stringify({refresh: token}),
        headers: { 'Content-Type': 'application/json' },
        types: [
            constants.REFRESH_REQUEST, constants.REFRESH_SUCCESS, constants.REFRESH_FAILURE
        ]
    }
});

export const logout = () => {
    return {
        type: constants.LOGOUT
    }
};
