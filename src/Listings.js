import React, { Component } from 'react';
import Film from './Film.js'

class Listings extends Component {
  render(){
    const filmNodes = this.props.data.map((film, index) => {
      return(
        <Film key={index}
          title={film.title}
          time={film.time}>
        </Film>
      )
    })
    return (<React.Fragment>{filmNodes}</React.Fragment>)
  }
};

export default Listings;
