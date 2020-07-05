import Actions from 'actions';

const getDefaultState = () => ({
  isLoading: false,
  data: {},
  error: null,
});

function itemById(state, action) {
  return {
    ...state,
    [action.id]: action.data,
  };
}

function detail(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }

  switch (action.type) {
    case Actions.FETCH_PLACE_DETAIL:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case Actions.FETCH_PLACE_DETAIL_SUCCESS:
      return {
        isLoading: false,
        data: itemById(state.data, action),
        error: null,
      };
    case Actions.FETCH_PLACE_DETAIL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case Actions.RESET_PLACE_DETAIL:
      return {
        data: {},
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
}

export default detail;
