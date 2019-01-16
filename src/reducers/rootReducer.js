import { combineReducers } from 'redux';
import shop from './shopReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
  shop,
  cart,
});

export default rootReducer;
