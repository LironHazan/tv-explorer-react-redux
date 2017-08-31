import React, { Component } from 'react';
import './shows.css';

class ShowsContainer extends Component {
  constructor(props) {
      super(props);
 }

  render() {
        const listItems = this.props.shows.map(show => {
        return (
          <div className="list-item">
            <div>{show.show.name}</div>
          </div>
        );
      });

    return (
      <div className="shows">
        <div className="shows-list">
          {listItems}
        </div>
      </div>
    );
  }
}
export default ShowsContainer;
