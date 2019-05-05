/*
  HomePage reducer to Handle Dispatched Actions && Update Store Information.
  The reducer takes care of our data. Using actions, we can
  update our application state. To add a new action,
  add it to the switch statement in the reducer function
*/

import { fromJS } from 'immutable';
import {
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  FIND_USERS,
  FIND_USERS_ERROR,
  FIND_USERS_SUCCESS,
} from './constants';

export const initialState = fromJS({
  findingUsers: false,
  loadingPosts: false,
  posts: [],
  users: [],
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return state.set('loadingPosts', true);
    case GET_POSTS_ERROR:
      return state.set('loadingPosts', false);
    case GET_POSTS_SUCCESS:
      return state
        .set('loadingPosts', false)
        .set('posts', fromJS(action.payload));
    case FIND_USERS:
      return state.set('findingUsers', true);
    case FIND_USERS_ERROR:
      return state.set('findingUsers', false);
    case FIND_USERS_SUCCESS:
      return state
        .set('findingUsers', false)
        .set('users', fromJS(action.payload));
    default:
      return state;
  }
}

export default homePageReducer;
