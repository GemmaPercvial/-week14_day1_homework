import React, { Component } from 'react';

class Film extends Component {
  render(){
    return(
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.time}</p>
      </div>
    )
  }
};

export default Film;
