import { RECEIVE_STUFF } from '../actions/actionTypes';

export default function shop(state = [], action) {
  switch (action.type) {
    case RECEIVE_STUFF:
      return action.products;

    default:
      return state;
  }
}
