import React, { Component } from 'react';
import { getYelp, yelpImg } from './services/api-helper';
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
      zipCode: null,
      randomRestdata: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.getCurrentPosition = this.getCurrentPosition.bind(this);
  }
  async componentDidMount() {

    const allRest = await getYelp()
    this.setState({
      zipCode: null,
      restaurants: null,
      randomRestdata: null
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
      waitingText: null,
      restaurants: restData,
      randomRestData: restData[idx],
    })
  }

  // getCurrentPosition() {
  //   navigator.geolocation.getCurrentPosition(position => {
  //     console.log(`${position.coords.latitude} ${position.coords.longitude}`);
  //   });
  //   }
  



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
            // getLocation={this.getCurrentPosition()}
            randRest={this.state.randomRestData} />
        )} />
      </div>
    );
  }
}

export default App;
