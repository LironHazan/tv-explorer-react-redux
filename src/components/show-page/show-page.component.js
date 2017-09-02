import React, { Component } from 'react';
import './show-page.css';

class ShowPage extends Component {
  constructor(props) {
      super(props);
 }

  render() {
    return (
      <div className="show">
        <div className="show-info-section">
            <div> section info component</div>
        </div>
                <div className="show-youtube-section">
                    <div> youtube component</div>
                </div>

      </div>
    );
  }
}
export default ShowPage;
