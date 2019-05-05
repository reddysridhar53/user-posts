import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
  getPosts as getPostsApi,
  findUsers as findUsersApi,
} from '../../helpers/apis';
import { GET_POSTS, FIND_USERS } from './constants';
import {
  getPostsSuccess,
  getPostsError,
  findUsersSuccess,
  findUsersError,
} from './actions';

export function* getPosts() {
  try {
    const posts = yield call(getPostsApi);
    yield put(getPostsSuccess(posts));
  } catch (err) {
    yield put(getPostsError(err));
  }
}

export function* getFindUsers({ payload: query }) {
  try {
    const users = yield call(findUsersApi, query);
    yield put(findUsersSuccess(users));
  } catch (err) {
    yield put(findUsersError(err));
  }
}

export default function* homePageSaga() {
  yield all([
    takeLatest(GET_POSTS, getPosts),
    takeLatest(FIND_USERS, getFindUsers),
  ]);
}
