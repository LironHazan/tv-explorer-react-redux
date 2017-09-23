import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as searchCastAction from '../../actions/searchCast.action';
import './show-page.css';

class ShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {cast: {}};
  }

  componentWillMount() {
    return searchCastAction.searchCast(this.props.match.params.showid)
      .then((cast) => {
        this.setState({cast});
      })
      .catch(err => {console.log(err)});
  }

  render() {
    console.log(JSON.stringify(this.state.cast, null, 4));
    if(this.state.cast.length > 0){
      const cast = this.state.cast.map((item) => {
        return {
          name: item.person.name,
          image: item.person.image.medium || item.person.image.original
        }
      });
      console.log('in cast ' + JSON.stringify(cast, null, 2));
    }
    const id = this.props.match.params.showid;
    const selectedShow = this.props.shows.filter(show => show.show.id == id)[0]; //string compare to number..
    //console.log('selectedShow: ' + JSON.stringify(selectedShow, null, 2));
    const summary = selectedShow.show.summary || '';
    const image = selectedShow.show.image && selectedShow.show.image.medium ? selectedShow.show.image.medium : '';
    return (
      <div className="show-info">
        <div className="show-info-section">
          <div> section info component: pics, cast, story etc..
            <h2> {selectedShow.show.name} </h2>
            <div dangerouslySetInnerHTML={{ __html: summary }}></div>
            <img src={image} alt=""/>
          </div>
        </div>
        <div className="show-info-section">
          <div> youtube component - relevant videos</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shows: state.search
  };
}

export default connect(mapStateToProps)(ShowPage);
