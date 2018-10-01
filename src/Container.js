import React, { Component } from 'react';
import Listings from './Listings.js'

class Container extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {title: "Sausage Party", time: "20:00"},
        {title: "Cafe Society", time: "21:30"},
        {title: "Morgan", time: "19:00"},
        {title: "The 9th Life of Louis Drax", time: "20:30"},
        {title: "Naam Hai Akira", time: "21:00"},
        {title: "Equity", time: "19:30"},
        {title: "Things to Come", time: "22:00"}
      ]
    }
  }
  render(){
    return <Listings data={this.state.data}/>
  }
};

export default Container;
