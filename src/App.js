import React, { Component } from 'react';
import { getYelp, geoRest } from './services/api-helper';
import Header from './components/Header';
import RestaurantPage from './components/RestaurantPage';
import Homepage from './components/Homepage';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';
import { Route, Link } from "react-router-dom";
import './App.css';
import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY
const URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: null,
      zipCode: null,
      randomRestdata: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;

      let resp = await axios(`${URL}?latitude=${lat}&longitude=${long}`, {
        headers: {
          Authorization: 'Bearer ' + API_KEY
        }
      });

      let restData = resp.data.businesses
      let idx = Math.floor(Math.random() * restData.length)
      restData = restData[idx]
      this.setState({
        randomRestData: restData
      })
    })
  }
  handleChange(e) {
    this.setState({
      zipCode: e.target.value,
    })
  }

  async handleSubmit(e) {
    e.preventDefault()
    const zip = this.state.zipCode
    const restData = await getYelp(zip)
    const idx = Math.floor(Math.random() * restData.length)
    this.setState({
      restaurants: restData,
      randomRestData: restData[idx],
    })
  }
 

  render() {
    return (
      <div className="App" >

        <Route exact path="/components/RestaurantList" render={(props) => (
          <RestaurantList {...props} restaurant={this.state.restaurants} />
        )} />
        <Route exact path='/' render={(props) => (
          <Homepage
            onSubmit={this.handleSubmit}
            onChange={this.handleChange} />
        )} />

        <Route exact path="/" render={(props) => (
          <RestaurantPage {...props}
            randRest={this.state.randomRestData}
          />
        )} />
        <Footer />
      </div>
    );
  }
}

export default App;
