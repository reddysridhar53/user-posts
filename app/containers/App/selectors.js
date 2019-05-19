/**
 * The Route state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const AppReducerInitialState = state => state.get('appPage', initialState);
const selectRouter = state => state.get('router');

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.get('location').toJS(),
  );

const selectGetLoggedIn = () =>
  createSelector(AppReducerInitialState, nextState =>
    nextState.get('isLoggedIn'),
  );

export { makeSelectLocation, selectGetLoggedIn };
