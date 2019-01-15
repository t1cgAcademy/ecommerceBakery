import { combineReducers } from 'redux';
import shop from './shopReducer';

const rootReducer = combineReducers({
  shop,
});

export default rootReducer;
