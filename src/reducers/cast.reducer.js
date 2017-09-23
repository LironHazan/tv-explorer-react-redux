import * as types from '../actions/types';
import initialState from './initial-state';

export default function castReducer(state = initialState.cast, action) {
  switch (action.type) {

    case types.SEARCH_SHOW:
      return action.searchCast;

    default:
      return state;
  }
}
