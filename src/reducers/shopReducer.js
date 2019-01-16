import { FETCH_STUFF, RECEIVE_STUFF } from '../actions/actionTypes';

export default function shop(state = [], action) {
  switch (action.type) {
    case FETCH_STUFF:
      return [...state, action.stuff];
    case RECEIVE_STUFF:
      return action.stuff;

    default:
      return state;
  }
}
