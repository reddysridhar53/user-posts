/*
  AppReducer
 */
import { SET_LOGIN, SET_LOGIN_SUCCESS, SET_LOGIN_FAILURE } from '../LoginPage/constants';
import { SET_LOGOUT, SET_LOGOUT_FAILURE, SET_LOGOUT_SUCCESS } from './constants';
import { fromJS } from 'immutable';

export const initialState = fromJS({
  loading: false,
  loggingIn: false,
  loggingout: false,
  isLoggedIn: false,
});

function appReducer (state = initialState, action) {
  switch (action.type) {
    case SET_LOGOUT:
      return state
      .set('loggingout', true);
    case SET_LOGOUT_SUCCESS:
      return state
      .set('loggingout', false)
      .set('isLoggedIn', false);
    case SET_LOGOUT_FAILURE:
      return state
      .set('loggingout', false)
      .set('isLoggedIn', false);
    case SET_LOGIN:
      return state
        .set('loggingIn', true);
    case SET_LOGIN_SUCCESS:
      return state
        .set('loggingIn', false)
        .set('isLoggedIn', true);
    case SET_LOGIN_FAILURE:
      return state
        .set('isLoggedIn', false)
        .set('loggingIn', false);
    default:
      return state;
  }
};

export default appReducer;
