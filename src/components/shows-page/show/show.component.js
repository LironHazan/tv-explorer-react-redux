import React, { Component } from 'react';
import {browserHistory} from 'react-router';

import './show.css';

class Show extends Component {
  constructor(props) {
      super(props);
      this.onClick = this.goToShow.bind(this);
 }

   goToShow() {
    browserHistory.push('/show');
   }

  render() {
    return (
      <div className="list-item">
        <div className="show-name">{this.props.name}</div>
        <div className="show-content">
            <div onClick={this.goToShow} className="show-image"> <img src={this.props.image} alt=""/> </div>
            <div className="show-summary" dangerouslySetInnerHTML={{ __html: this.props.summary }} />
       </div>
      </div>
    );
  }
}
export default Show;
