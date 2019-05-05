/*
  Homepage selectors for posts & users found.
*/

// import { createSelector } from 'reselect';
// import { initialState } from './reducer';

// const HomepageInitialState = state =>
//   state.homePage.get('homePage', initialState);

// const selectPosts = () =>
//   createSelector(
//     HomepageInitialState,
//     nextState => {
//       console.log('Next: ', nextState.get('posts'));
//       return nextState.get('posts').toJS();
//     },
//   );

// const selectLoadingPosts = () =>
//   createSelector(
//     HomepageInitialState,
//     nextState => nextState.get('loadingPosts'),
//   );

// const selectFindingPosts = () =>
//   createSelector(
//     HomepageInitialState,
//     nextState => nextState.get('findingUsers'),
//   );

// const selectFindUsers = () =>
//   createSelector(
//     HomepageInitialState,
//     nextState => {
//       console.log('Next: ', nextState.get('users'));
//       return nextState.get('users').toJS();
//     },
//   );

// const makeSelectHomePage = () =>
//   createSelector(
//     HomepageInitialState,
//     nextState => nextState.toJS(),
//   );

// export default makeSelectHomePage;
// export { selectPosts, selectFindUsers, selectLoadingPosts, selectFindingPosts };

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.get('homePage', initialState);

/**
 * Other specific selectors
 */

const selectPosts = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.get('posts').toJS(),
  );

const selectFindUsers = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.get('users').toJS(),
  );

const selectLoadingPosts = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.get('loadingPosts'),
  );
/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    substate => substate.toJS(),
  );

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  selectPosts,
  selectFindUsers,
  selectLoadingPosts,
};
