import React, { Component, PropTypes } from 'react';
import './search.css';
//import SearchService from './search.service.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActions from '../../actions/search.actions.js';
import logo from '../assets/tv.png';

class Search extends Component {

  constructor(props) {
      super(props);
      this.state = {value:''}

      this.handleChange = this.handleChange.bind(this);
      this.keyPress = this.keyPress.bind(this);
     // this.searchService = new SearchService();
   }

    handleChange(e) {
      this.setState({ value: e.target.value });
    }

  keyPress(e){
      if(e.keyCode === 13){
         if(e.target.value){
            this.props.searchTvShow(e.target.value);
         }
      }
   }

  render() {
    return (
      <div className="search">
        <input type="text" value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange} />
        <img src={logo} className="app-logo" alt="logo" />
      </div>
    );
  }
}

Search.propTypes = {
 searchTvShow: PropTypes.object.isRequired,
};

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

//export default Search;
