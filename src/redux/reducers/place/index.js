import {combineReducers} from 'redux';
import autocomplete from './autocomplete';
import detail from './detail';

export default combineReducers({
  autocomplete,
  detail,
});
