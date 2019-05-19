import { takeEvery, put, all } from 'redux-saga/effects';

import { SET_LOGIN } from './constants';
import {
  setLoginSuccess,
  setLoginFailure
} from './actions';

export function* setLogin(payload) {
  try {
    yield put(setLoginSuccess(payload));
  } catch (err) {
    yield setLoginFailure(err);
  }
}

export default function* loginPageSaga() {
  yield all([
    takeEvery(SET_LOGIN, setLogin),
  ]);
}
