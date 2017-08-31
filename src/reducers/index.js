import {combineReducers} from 'redux';
import search from './search.reducer.js';
const rootReducer = combineReducers({
  search,
});

export default rootReducer;
