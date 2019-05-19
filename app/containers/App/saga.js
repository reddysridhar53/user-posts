import { takeEvery, put, all } from 'redux-saga/effects';

import { SET_LOGOUT } from './constants';
import {
  setLogoutSuccess,
  setLogoutFailure
} from './actions';

export function* setLogout() {
  try {
    yield put(setLogoutSuccess());
  } catch (err) {
    yield setLogoutFailure();
  }
}

export default function* appPageSaga() {
  yield all([
    takeEvery(SET_LOGOUT, setLogout),
  ]);
}
