import * as types from './types';

 export function search(query) {
   return function (dispatch, getState) {
     return fetch('http://api.tvmaze.com/search/shows?q=:'+ query + '/')
     .then(res => res.json())
     .then(shows => {
       dispatch({type: types.SEARCH_SHOW, search: shows});
     })
     .catch(error => {
       throw(error);
     });
   };
 }
