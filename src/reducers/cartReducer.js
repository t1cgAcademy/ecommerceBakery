import { ADD_ITEM } from '../actions/actionTypes';

export default function cart(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.cart];
    default:
      return state;
  }
}
