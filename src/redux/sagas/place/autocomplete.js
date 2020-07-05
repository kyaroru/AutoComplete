import {takeLatest, all, fork, put, call} from 'redux-saga/effects';
import Actions from 'actions';
import api from 'api';
import Config from 'react-native-config';

function* fetchAutocomplete({data}) {
  try {
    const newData = {
      ...data,
      key: Config.API_KEY,
      language: 'en',
      components: 'country:my',
    };
    const response = yield call(api.getAutocomplete, newData);
    const json = response && response.data;
    if (json) {
      yield put(Actions.fetchAutocompleteSuccess(json));
    } else {
      yield put(Actions.fetchAutocompleteFail(response));
    }
  } catch (error) {
    yield put(Actions.fetchAutocompleteFail(error));
  }
}

function* watchFetchAutocomplete() {
  yield takeLatest(Actions.FETCH_AUTOCOMPLETE, fetchAutocomplete);
}

export default function* autocomplete() {
  yield all([fork(watchFetchAutocomplete)]);
}
