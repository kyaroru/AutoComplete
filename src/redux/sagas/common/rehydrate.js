import {
  takeLatest,
  all,
  fork,
  put,
  take,
  call,
  delay,
} from 'redux-saga/effects';
import Actions from 'actions';
import AppNavigationService from 'navigator/app/AppNavigationService';

function* rehydrate() {
  yield delay(500);
  yield put(Actions.finishRehydrate()); // triggers finishRehydrate action when redux persist finish rehydrate
}

function* redirectApp() {
  yield take(Actions.FINISH_REHYDRATE); // redirect app occurs only after redux-persist finish rehydrate the store
  yield call(AppNavigationService.navigate, 'Dashboard');
}

function* watchRehydrate() {
  yield takeLatest('persist/REHYDRATE', rehydrate);
}

function* watchRedirectApp() {
  yield takeLatest(Actions.REDIRECT_APP, redirectApp);
}

export default function* persist() {
  yield all([fork(watchRehydrate), fork(watchRedirectApp)]);
}
