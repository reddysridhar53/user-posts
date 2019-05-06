/*
  Homepage selectors for posts & users found.
*/

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const HomepageInitialState = state => state.get('homePage', initialState);

const selectPosts = () =>
  createSelector(
    HomepageInitialState,
    nextState =>
      // console.log('Next: ', nextState.get('posts'));
      nextState.get('posts').toJS(),
  );

const selectLoadingPosts = () =>
  createSelector(
    HomepageInitialState,
    nextState => nextState.get('loadingPosts'),
  );

const selectFindingUsers = () =>
  createSelector(
    HomepageInitialState,
    nextState => nextState.get('findingUsers'),
  );

const selectFindUsers = () =>
  createSelector(
    HomepageInitialState,
    nextState =>
      // console.log('Next: ', nextState.get('users'));
      nextState.get('users').toJS(),
  );

export { selectPosts, selectFindUsers, selectLoadingPosts, selectFindingUsers };
