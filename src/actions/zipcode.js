import { SEARCH_ZIPCODE } from '../constants/actionTypes';
import api from '../api';

export const searchZipcode = (zipcode) => (dispatch) => {
  return dispatch(
    api.fetch(SEARCH_ZIPCODE, api.config.searchZipcode(zipcode), api.http.get())
  );
};
