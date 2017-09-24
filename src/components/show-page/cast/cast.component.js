import React, { Component } from 'react';
//import './cast.css';

class Cast extends Component {
  constructor(props) {
    super(props);
  }


render() {
  let cast;
  if(this.props.cast.length > 0) {
    cast = this.props.cast.map((item) => {
      const name = item.person.name;
      const image = item.person.image ? item.person.image.medium || item.person.image.original : null;
      return(<div key={item.person.id}> {name}
              <img src={image} alt=""/>
            </div>);
    });
  }
  return (
    <div>{cast}</div>
  );
}
}

export default Cast;