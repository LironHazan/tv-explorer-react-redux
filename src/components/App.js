import React, { Component } from 'react';
import logo from './assets/tv.png';
import './App.css';
import Search from './search/search.component.js';
import ShowsPage from './shows-page/shows-page.component.js';
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
       <ShowsPage className="shows-container" shows={this.props.shows}></ShowsPage>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    shows: state.search
  };
}

export default connect(mapStateToProps)(App);
