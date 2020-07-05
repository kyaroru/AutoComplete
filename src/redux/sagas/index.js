import {all, fork} from 'redux-saga/effects';
import common from './common';
import place from './place';

export default function* root() {
  yield all([fork(common), fork(place)]);
}
