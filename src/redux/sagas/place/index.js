import {all, fork} from 'redux-saga/effects';
import autocomplete from './autocomplete';

export default function* place() {
  yield all([fork(autocomplete)]);
}
