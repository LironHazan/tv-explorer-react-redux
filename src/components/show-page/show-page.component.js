import React, { Component } from 'react';
import './show-page.css';

class ShowPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="show-info">
        <div className="show-info-section">
          <div> section info component: pics, cast, story etc..</div>
        </div>
        <div className="show-info-section">
          <div> youtube component - relevant videos</div>
        </div>
      </div>
    );
  }
}
export default ShowPage;
