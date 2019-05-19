/*
  LoginPage selectors.
*/

import { createSelector } from 'reselect';
import { initialState } from '../App/reducer';

const LoginPageInitialState = state => state.get('loginPage', initialState);

const selectLoggingIn = () =>
  createSelector(LoginPageInitialState, nextState =>
    nextState.get('loggingIn'),
  );

const selectGetLoggedIn = () =>
  createSelector(LoginPageInitialState, nextState =>
    nextState.get('isLoggedIn'),
  );

export {
  selectLoggingIn,
  selectGetLoggedIn,
};
 