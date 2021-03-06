import React, { Component } from 'react';
import {Link as Link} from 'react-router-dom';
import './show.css';

class Show extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let showTitle = this.props.showid ?
      <Link to={`/show/${this.props.showid}`} className="show-name" onClick={this.setShowData}>{this.props.name}</Link> //= '';
    : <div className="show-name">{this.props.name}</div> || '';

    return (
      <div className="list-item">
        {showTitle}
        <div className="show-content">
          <div className="show-image">
            <img src={this.props.image} alt=""/>
          </div>
          <div className="show-summary" dangerouslySetInnerHTML={{ __html: this.props.summary }} />
        </div>
      </div>
    );
  }
}

export default Show;