const PREFIX = 'PLACE';

export const FETCH_PLACE_DETAIL = `${PREFIX}/FETCH_PLACE_DETAIL`;
export const FETCH_PLACE_DETAIL_SUCCESS = `${PREFIX}/FETCH_PLACE_DETAIL_SUCCESS`;
export const FETCH_PLACE_DETAIL_FAIL = `${PREFIX}/FETCH_PLACE_DETAIL_FAIL`;
export const RESET_PLACE_DETAIL = `${PREFIX}/RESET_PLACE_DETAIL`;

export const fetchPlaceDetail = (data, callbackSuccess) => ({
  type: FETCH_PLACE_DETAIL,
  data,
  callbackSuccess,
});

export const fetchPlaceDetailSuccess = (id, data) => ({
  type: FETCH_PLACE_DETAIL_SUCCESS,
  id,
  data,
});

export const fetchPlaceDetailFail = (error) => ({
  type: FETCH_PLACE_DETAIL_FAIL,
  error,
});

export const resetPlaceDetail = () => ({
  type: RESET_PLACE_DETAIL,
});
