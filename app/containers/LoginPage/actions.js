import { SET_LOGIN, SET_LOGIN_SUCCESS, SET_LOGIN_FAILURE } from './constants';

export function setLogin(payload) {
    return {
        type: SET_LOGIN,
        payload
    }
}

export function setLoginSuccess(payload) {
    return {
        type: SET_LOGIN_SUCCESS,
        payload
    }
}

export function setLoginFailure(payload) {
    return {
        type: SET_LOGIN_FAILURE,
        payload
    }
}