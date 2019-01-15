import initialState from './initialState';
import { FETCH_STUFF, RECEIVE_STUFF } from '../actions/actionTypes';

export default function shop(state = initialState.stuff, action) {
  let newState;
  console.log('show me the action please', action.stuff);
  switch (action.type) {
    case FETCH_STUFF:
      console.log('FETCH_STUFF Action');
      // return action;
      return {
        ...state,
        stuff: action.stuff,
      };
    case RECEIVE_STUFF:
      //might need to change action.stuff
      newState = action.stuff;
      console.log('RECEIVE_STUFF Action');
      return newState;
    default:
      return state;
  }
}
