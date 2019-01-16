import * as types from './actionTypes';

export const fetchStuff = () => {
  return dispatch => {
    let request = {};
    request.method = 'get';
    request.headers = { 'Content-Type': 'application/json' };
    return fetch('http://localhost:3001/api/products', request)
      .then(response =>
        response.json().then(data => ({
          data: data,
        }))
      )
      .then(json => dispatch({ type: types.RECEIVE_STUFF, stuff: json.data.data }))
      .catch(error => {
        console.log('FETCH ERR:  ', error);
      });
  };
};
