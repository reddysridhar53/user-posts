import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  getPostById as getPostByIdApi,
  getCommentsByPostId as getCommentsByPostIdApi,
} from '../../helpers/apis';
import { GET_POST_BY_ID, GET_COMMENTS_BY_POST_ID } from './constants';
import {
  getPostByIdSuccess,
  getPostByIdError,
  getCommentsByPostIdSuccess,
  getCommentsByPostIdError,
} from './actions';

export function* getPostById({ payload: postId }) {
  try {
    const post = yield call(getPostByIdApi, postId);
    yield put(getPostByIdSuccess(post));
  } catch (err) {
    yield put(getPostByIdError(err));
  }
}

export function* getCommentsByPostId({ payload: postId }) {
  try {
    const comments = yield call(getCommentsByPostIdApi, postId);
    yield put(getCommentsByPostIdSuccess(comments));
  } catch (err) {
    yield put(getCommentsByPostIdError(err));
  }
}

export default function* postPageSaga() {
  yield all([
    takeLatest(GET_POST_BY_ID, getPostById),
    takeLatest(GET_COMMENTS_BY_POST_ID, getCommentsByPostId),
  ]);
}
