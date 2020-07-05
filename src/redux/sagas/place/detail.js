import {takeLatest, all, fork, put, call} from 'redux-saga/effects';
import Actions from 'actions';
import api from 'api';
import Config from 'react-native-config';

function* fetchPlaceDetail({data, callbackSuccess}) {
  try {
    const newData = {
      ...data,
      key: Config.API_KEY,
      language: 'en',
    };
    const response = yield call(api.getPlaceDetail, newData);
    const json = response && response.data;
    if (json?.result) {
      yield put(
        Actions.fetchPlaceDetailSuccess(json.result.place_id, json.result),
      );
      if (callbackSuccess) {
        yield call(callbackSuccess, json.result);
      }
    } else {
      yield put(Actions.fetchPlaceDetailFail(response));
    }
  } catch (error) {
    yield put(Actions.fetchPlaceDetailFail(error));
  }
}

function* watchfetchPlaceDetail() {
  yield takeLatest(Actions.FETCH_PLACE_DETAIL, fetchPlaceDetail);
}

export default function* detail() {
  yield all([fork(watchfetchPlaceDetail)]);
}
