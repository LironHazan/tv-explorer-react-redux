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

 export function searchCast(id) {
  return fetch(conf.API + 'shows/' + id + '/cast')
    .then(res => res.json())
    .then(cast => {
      return cast;
    })
    .catch(err => {
      throw(err);
    });
}

 export function searchShow(id) {
  return fetch(conf.API + 'shows/' + id)
    .then(res => res.json())
    .then(show => {
      return show;
    })
    .catch(err => {
      throw(err);
    });
}

 export function searchVideos(query) {
  return fetch(conf.YT_API_DOMAIN + '?q='+ query + '&part=snippet&key=' + conf.YT_KEY)
    .then(res => res.json())
    .then(show => {
      return show;
    })
    .catch(err => {
      throw(err);
    });
}