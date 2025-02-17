import { attemptRequest } from 'redux-requests';
import { PENDING, SUCCESS, ERROR } from '../constants/actionStatus';

const checkStatus = (response) => {
  console.log(response);

  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  // error.error = response;
  error.code = response.status;
  throw error;
};

const parseJSON = (response) => {
  let json;

  try {
    json = response.json();
  } catch (e) {
    throw new Error(e);
  }

  return json;
};

const createAction = (type, url, options) => {
  const { requestId, payload, ...rest } = options;

  const request = new Promise((resolve, reject) => {
    fetch(url, rest)
      .then(checkStatus)
      .then(parseJSON)
      .then((res) => {
        resolve(res);
        return res;
      })
      .catch((err) => {
        reject(err);
      });
  });

  const makeRequest = () => request;

  return (dispatch) => {
    attemptRequest(
      requestId || url,
      {
        begin: () => ({
          type: `${type}_${PENDING}`,
          payload
        }),
        success: (response) => ({
          type: `${type}_${SUCCESS}`,
          response
        }),
        failure: (error) => ({
          type: `${type}_${ERROR}`,
          error
        })
      },
      makeRequest,
      dispatch
    );
    return request;
  };
};

export default createAction;
