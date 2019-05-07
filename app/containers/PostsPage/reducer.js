/*
  HomePage reducer to Handle Dispatched Actions && Update Store Information.
  The reducer takes care of our data. Using actions, we can
  update our application state. To add a new action,
  add it to the switch statement in the reducer function
*/

import { fromJS } from 'immutable';
import {
  GET_POST_BY_ID,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_ERROR,
  GET_COMMENTS_BY_POST_ID,
  GET_COMMENTS_BY_POST_ID_SUCCESS,
  GET_COMMENTS_BY_POST_ID_ERROR
} from './constants';

export const initialState = fromJS({
  loadingPost: false,
  loadingComments: false,
  post: {},
  comments: [],
});

function postPageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_BY_ID:
      return state.set('loadingPost', true);
    case GET_POST_BY_ID_ERROR:
      return state.set('loadingPost', false);
    case GET_POST_BY_ID_SUCCESS:
      return state
        .set('loadingPost', false)
        .set('post', fromJS(action.payload));
    case GET_COMMENTS_BY_POST_ID:
      return state.set('loadingComments', true);
    case GET_COMMENTS_BY_POST_ID_ERROR:
      return state.set('loadingComments', false);
    case GET_COMMENTS_BY_POST_ID_SUCCESS:
      return state
        .set('loadingComments', false)
        .set('comments', fromJS(action.payload));
    default:
      return state;
  }
}

export default postPageReducer;
