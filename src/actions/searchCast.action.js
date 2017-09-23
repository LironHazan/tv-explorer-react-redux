import * as types from './types';
import conf from '../conf'

 export function searchCast(id) {
  // return function (dispatch, getState) {
     return fetch(conf.API + 'shows/' + id + '/cast')
     .then(res => res.json())
     .then(cast => {
       return cast;
     })
     .catch(error => {
       throw(error);
     });
  // };
 }
