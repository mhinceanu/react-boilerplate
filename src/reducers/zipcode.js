import { SEARCH_ZIPCODE } from '../constants/actionTypes';
import { PENDING, SUCCESS, ERROR } from '../constants/actionStatus';

export const initialState = {
  isFetching: false,
  fetched: false,
  zipcode: null,
  error: null
};

const zipcode = (state = initialState, action = {}) => {
  const { type, response, error } = action;

  switch (type) {
    case `${SEARCH_ZIPCODE}_${PENDING}`:
      return {
        ...state,
        isFetching: true,
        fetched: false,
        zipcode: null,
        error: null
      };

    case `${SEARCH_ZIPCODE}_${SUCCESS}`:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        zipcode: response
      };

    case `${SEARCH_ZIPCODE}_${ERROR}`:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        error
      };

    default:
      return state;
  }
};

export default zipcode;
