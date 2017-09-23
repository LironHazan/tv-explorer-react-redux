import React, { Component } from 'react';
import './search.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../../actions/search.actions.js';
import logo from '../assets/tv.png';

class Search extends Component {

  constructor(props) {
      super(props);
      this.state = {searchKey: ''};
      this.getShowText = this.getShowText.bind(this);
      this.searchTvShow = this.searchTvShow.bind(this);
   }

    getShowText(e) {
      this.setState({searchKey: e.target.value });
    }

  searchTvShow(e){
      if(e.keyCode === 13){
         if(e.target.value){
            this.props.searchTvShow(e.target.value);
         }
      }
   }

  render() {
    return (
      <div className="search">
        <input type="text" value={this.state.searchKey} onKeyDown={this.searchTvShow} onChange={this.getShowText} />
        <img src={logo} className="app-logo" alt="logo" />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    search: state.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchTvShow: bindActionCreators(searchActions.search, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
