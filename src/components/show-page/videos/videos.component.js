import React, { Component } from 'react';
import * as searchAction from '../../../actions/search.actions';
import conf from '../../../conf.js'

//import './videos.css';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};
  }

  componentDidMount() {
    return searchAction.searchVideos(this.props.name)
      .then((videos) => {
        this.setState({videos: videos.items});
      })
      .catch(err => {console.log(err)});
  }

  render() {
    let videos;
    if(this.state.videos.length > 0) {
      videos = this.state.videos.reduce((acc, value) => {
          if(value.id.videoId && (acc.indexOf(value.id.videoId) === -1)){
            acc.push(value.id.videoId);
          }
          return acc;
      }, []);

      videos = videos.map((id) => {
        return (
         <div key={id}>
            <iframe width="400" height="300" src={conf.YT_DOMAIN + '/' + id} frameBorder="0" allowFullScreen> </iframe>
         </div>);
      });
    }
    return (
      <div>{videos}</div>
    );
  }
}

export default Videos;
