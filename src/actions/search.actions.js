import * as types from './types';
import conf from '../conf'

 export function search(query) {
   return function (dispatch, getState) {
     return fetch(conf.API + 'search/shows?q=:' + query + '/')
     .then(res => res.json())
     .then(shows => {
       dispatch({type: types.SEARCH_SHOW, search: shows});
     })
     .catch(error => {
       throw(error);
     });
   };
 }
