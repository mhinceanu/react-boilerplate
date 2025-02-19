import zipcode, { initialState } from './zipcode';
import { SEARCH_ZIPCODE } from '../constants/actionTypes';
import { PENDING, SUCCESS, ERROR } from '../constants/actionStatus';

describe('Reducer - zipcode', function () {
  it('should return initial state', () => {
    expect(zipcode(initialState, { type: 'unhandled' })).toEqual(initialState);
  });

  // SEARCH_ZIPCODE
  it('should handle SEARCH_ZIPCODE_PENDING action', () => {
    const expected = {
      ...initialState,
      isFetching: true,
      fetched: false,
      data: null,
      error: null
    };

    const action = {
      type: `${SEARCH_ZIPCODE}_${PENDING}`
    };

    expect(zipcode(initialState, action)).toEqual(expected);
  });

  it('should handle SEARCH_ZIPCODE_SUCCESS action', () => {
    const response = {
      'post code': '90210',
      country: 'United States',
      'country abbreviation': 'US',
      places: [
        {
          'place name': 'Beverly Hills',
          longitude: '-118.4065',
          state: 'California',
          'state abbreviation': 'CA',
          latitude: '34.0901'
        }
      ]
    };

    const expected = {
      ...initialState,
      isFetching: false,
      fetched: true,
      data: response
    };

    const action = {
      type: `${SEARCH_ZIPCODE}_${SUCCESS}`,
      response
    };

    expect(zipcode(initialState, action)).toEqual(expected);
  });

  it('should handle SEARCH_ZIPCODE_ERROR action', () => {
    const error = {
      message: '',
      status: 404
    };

    const expected = {
      ...initialState,
      isFetching: false,
      fetched: true,
      error
    };

    const action = {
      type: `${SEARCH_ZIPCODE}_${ERROR}`,
      error
    };

    expect(zipcode(initialState, action)).toEqual(expected);
  });
});
