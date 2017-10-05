import React, { Component } from 'react';
import * as searchAction from '../../actions/search.actions';
import Show from '../shows-page/show/show.component';
import Cast from './cast/cast.component';
import Videos from './videos/videos.component';

import './show-page.css';

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {cast: [], show: {}, videos: []};
  }

  componentDidMount() {
    let _cast;
    const _id = this.props.match.params.showid;
    return searchAction.searchCast(_id)
      .then((cast) => {
        _cast = cast;
        this.setState({cast, show: {}});
        return searchAction.searchShow(_id)
      })
      .then((show) => {
        this.setState({cast: _cast, show});
        return searchAction.searchVideos(this.state.show.name)
      })
      .then((videos) => {
        this.setState({videos: videos.items});
      })
      .catch(err => {console.log(err)});
  }

  render() {

    const _show = this.state.show;
    const name = _show ? _show.name : '';
    const summary = _show ? _show.summary : '';
    const image = _show && _show.image && _show.image.medium ? _show.image.medium : '';

    return (
      <div className="show-info">
        <div className="show-info-section">
          <div>
            <Show name={name} summary={summary} image={image}> </Show>
            <Cast cast={this.state.cast}> </Cast>
          </div>
        </div>
        <div className="show-info-section">
          <Videos videos={this.state.videos}> </Videos>
        </div>
      </div>
    );
  }
}

export default ShowPage;
