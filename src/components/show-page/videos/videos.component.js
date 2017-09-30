import React, { Component } from 'react';
import {Modal, Button} from 'react-bootstrap';
import * as searchAction from '../../../actions/search.actions';
import conf from '../../../conf.js'
import './videos.css';

class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: [], vname: this.props.vname/*, showModal: false*/};
    //this.close = this.close.bind(this);
    //this.openModal = this.openModal.bind(this);
  }

  // close() {
  //   this.setState({ showModal: false });
  // }
  //
  // openModal() {
  //   this.setState({ showModal: true });
  // }

  // shouldComponentUpdate(nextProps){
  //   return this.props.vname !== nextProps.vname;
  // }

  componentDidMount() {
    return searchAction.searchVideos(this.state.name)
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
         <div key={id} /*onClick={this.openModal}*/>
            <iframe title={id} width="400" height="300" src={conf.YT_DOMAIN + '/' + id} frameBorder="0" allowFullScreen> </iframe>
         </div>);
      });
    }
    return (
   <div>

    // <Modal show={this.state.showModal} onHide={this.close}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Modal title</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>
    //     modal body - video goes here!
    //   </Modal.Body>
    //   <Modal.Footer>
    //     footer - will i need it?
    //   </Modal.Footer>
    // </Modal>

      {videos}
    </div>
    );
  }
}

export default Videos;
