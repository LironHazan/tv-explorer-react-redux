import React, { Component } from 'react';
import * as searchAction from '../../actions/search.actions';
import Show from '../shows-page/show/show.component';
import Cast from './cast/cast.component';
import Video from './videos/videos.component';

import './show-page.css';

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {cast: [], show: {}};
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
          <div> youtube component - relevant videos</div>
          <Video name={name}> </Video>
        </div>
      </div>
    );
  }
}

export default ShowPage;
