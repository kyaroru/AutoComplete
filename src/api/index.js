import qs from 'qs';
import api from './helper';

export default {
  getAutocomplete: (data) =>
    api.get(`api/place/autocomplete/json?${qs.stringify(data)}`),
};
