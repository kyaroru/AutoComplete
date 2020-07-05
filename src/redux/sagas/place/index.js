import {all, fork} from 'redux-saga/effects';
import autocomplete from './autocomplete';
import detail from './detail';

export default function* place() {
  yield all([fork(autocomplete), fork(detail)]);
}
