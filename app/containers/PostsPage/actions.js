import {
  GET_POST_BY_ID,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_ERROR,
  GET_COMMENTS_BY_POST_ID,
  GET_COMMENTS_BY_POST_ID_SUCCESS,
  GET_COMMENTS_BY_POST_ID_ERROR,
} from './constants';

export function getPostById(payload) {
  return {
    type: GET_POST_BY_ID,
    payload,
  };
}

export function getPostByIdSuccess(payload) {
  return {
    type: GET_POST_BY_ID_SUCCESS,
    payload,
  };
}

export function getPostByIdError(payload) {
  return {
    type: GET_POST_BY_ID_ERROR,
    payload,
  };
}

export function getCommentsByPostId(payload) {
  return {
    type: GET_COMMENTS_BY_POST_ID,
    payload,
  };
}

export function getCommentsByPostIdSuccess(payload) {
  return {
    type: GET_COMMENTS_BY_POST_ID_SUCCESS,
    payload,
  };
}

export function getCommentsByPostIdError(payload) {
  return {
    type: GET_COMMENTS_BY_POST_ID_ERROR,
    payload,
  };
}
