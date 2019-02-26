import React, { Component } from 'react';
import getYelp from './services/api-helper';
import Header from './components/Header';
import Nav from './components/Nav';
import RestaurantPage from './components/RestaurantPage';
import Homepage from './components/Homepage';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';
import { Route, Link } from "react-router-dom";

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: null,
      zipCode: '',
      randomRestdata: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  async componentDidMount() {
    const allRest = await getYelp();
    // console.log(allRest)
    this.setState({
      zipCode: '',
      restaurants: null,
      randomRestdata: null
    })
  }
  handleChange(e) {
    this.setState({
      zipCode: e.target.value
    })
  }
  async handleSubmit(e) {
    e.preventDefault()
    const zip = this.state.zipCode
    console.log(zip)
    const restData = await getYelp(zip)
    const idx = Math.floor(Math.random() * restData.length)
    this.setState({
      restaurants: restData,
      randomRestData: restData[idx]
    })
  }
  render() {
    return (
      <div className="App">
        <Link to="/components/RestaurantList">List of Restaurants</Link>
        <Route exact path="/components/RestaurantList" render={(props) => (
          <RestaurantList {...props} restaurant={this.state.restaurants} />
        )} />
        <Homepage onSubmit={this.handleSubmit} onChange={this.handleChange} />

        <RestaurantPage randRest={this.state.randomRestData} />
      </div>
    );
  }
}

export default App;
