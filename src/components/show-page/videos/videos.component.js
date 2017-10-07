import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
import conf from '../../../conf.js'
import './videos.css';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false, index: 0};
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open(id) {
    this.setState({ showModal: true, id });
  }

  render() {
    let videos;
    if(this.props.videos.length > 0) {
      videos = this.props.videos.reduce((acc, value) => {
          if(value.id.videoId && (acc.indexOf(value.id.videoId) === -1)){
            acc.push({id: value.id.videoId,
              img: value.snippet.thumbnails.default.url});
          }
          return acc;
      }, []);

      videos = videos.map((video) => {
        return (
         <div key={video.id} onClick={() => this.open(video.id)}>
           <div className="vido-image">
             <img className="song-img" src={video.img}/>
             <span className="play-icon"><span className="glyphicon glyphicon-play"></span></span>
           </div>
         </div>);
      });
    }
    return (
   <div>
      <Modal show={this.state.showModal} onHide={this.close}>
      <Modal.Header closeButton>
        <Modal.Title> </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe title={this.state.id} width="400" height="300" src={conf.YT_DOMAIN + '/' + this.state.id} frameBorder="0" allowFullScreen> </iframe>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
      {videos}
   </div>
    );
  }
}

export default Videos;
