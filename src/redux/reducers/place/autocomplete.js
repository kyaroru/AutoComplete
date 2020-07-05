import Actions from 'actions';

const getDefaultState = () => ({
  isLoading: false,
  data: {},
  error: null,
});

function info(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }

  switch (action.type) {
    case Actions.FETCH_AUTOCOMPLETE:
      return {
        isLoading: true,
        error: null,
        data: {},
      };
    case Actions.FETCH_AUTOCOMPLETE_SUCCESS:
      return {
        isLoading: false,
        data: action.data,
        error: null,
      };
    case Actions.FETCH_AUTOCOMPLETE_FAIL:
      return {
        isLoading: false,
        data: {},
        error: action.error,
      };
    default:
      return state;
  }
}

export default info;
