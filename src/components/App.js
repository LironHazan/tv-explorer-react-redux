import React, { Component, PropTypes } from 'react';
import logo from './assets/tv.png';
import './App.css';
import Search from './search/search.component.js';
import ShowsContainer from './shows-container/shows-container.component.js';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
            <div className="tv-shows-searcher">
                <Search></Search>
            </div>
        </div>
       <ShowsContainer className="shows-container" shows={this.props.shows}></ShowsContainer>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    shows: state.search
  };
}

App.propTypes = {
  shows: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
