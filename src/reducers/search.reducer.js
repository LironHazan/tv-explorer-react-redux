import * as types from '../actions/types';
import initialState from './initial-state';

export default function searchReducer(state = initialState.shows, action) {
  switch (action.type) {

    case types.SEARCH_SHOW:
      return action.search;

    default:
      return state;
  }
}
