const PREFIX = 'PLACE';

export const FETCH_AUTOCOMPLETE = `${PREFIX}/FETCH_AUTOCOMPLETE`;
export const FETCH_AUTOCOMPLETE_SUCCESS = `${PREFIX}/FETCH_AUTOCOMPLETE_SUCCESS`;
export const FETCH_AUTOCOMPLETE_FAIL = `${PREFIX}/FETCH_AUTOCOMPLETE_FAIL`;

export const fetchAutocomplete = (data) => ({
  type: FETCH_AUTOCOMPLETE,
  data,
});

export const fetchAutocompleteSuccess = (data) => ({
  type: FETCH_AUTOCOMPLETE_SUCCESS,
  data,
});

export const fetchAutocompleteFail = (error) => ({
  type: FETCH_AUTOCOMPLETE_FAIL,
  error,
});
