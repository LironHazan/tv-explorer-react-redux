import React, { Component } from 'react';
import Show from './show/show.component.js';
import './shows-page.css';

class ShowsPage extends Component {
  constructor(props) {
      super(props);
 }

  render() {
        const showsList = this.props.shows.map(item => {
        const name = item.show.name;
        const summary = item.show.summary || '';
        const image = item.show.image && item.show.image.medium ? item.show.image.medium : '';
        return (<Show key={item.show.id} name={name} summary={summary} image={image}> </Show>);
      });

    return (
      <div className="shows">
        <div className="shows-list">
          {showsList}
        </div>
      </div>
    );
  }
}
export default ShowsPage;
