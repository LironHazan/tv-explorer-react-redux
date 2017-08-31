
export default class SearchService {

    constructor() {
      this.search = this.search.bind(this);
    }

    search(query){
    return fetch('http://api.tvmaze.com/search/shows?q=:'+ query + '/')
    .then(resp => resp.json());
    }

}