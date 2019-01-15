import * as types from './actionTypes';

export function receiveStuff(json) {
  console.log('show me the json variable pllllease', json.data.data);
  return { type: types.RECEIVE_STUFF, stuff: json.data.data };
}

export function fetchStuff() {
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
      .then(json => dispatch(receiveStuff(json)))
      .catch(error => {
        console.log('FETCH ERR:  ', error);
      });
  };
}
