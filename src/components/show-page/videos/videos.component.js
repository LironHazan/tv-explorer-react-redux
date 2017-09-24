import React, { Component } from 'react';
import * as searchAction from '../../../actions/search.actions';
//import './show-page.css';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
  }

  componentDidMount() {
    return searchAction.searchVideos(this.props.name)
      .then((videos) => {
        this.setState({videos});
      })
      .catch(err => {console.log(err)});
  }

  render() {
    let videos;
    if(this.state.videos.length > 0) {
      videos = this.props.cast.map((item) => {
        return (<div key={item.id}>
          {item}
        </div>);
      });
    }
    return (
      <div>{videos}</div>
    );
  }
}

export default Videos;
