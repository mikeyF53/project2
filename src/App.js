import React, { Component } from 'react';
import getYelp from './services/api-helper';
import Header from './components/Header';
import Nav from './components/Nav';
import RestaurantPage from './components/RestaurantPage';
import Homepage from './components/Homepage';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      zipCode: 11365,
      restaurant: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  async componentDidMount() {
    const allRest = await getYelp();
    console.log(allRest)
    this.setState({
      restaurant: allRest
    })
    return allRest;
  }
  handleChange(e) {
    this.setState({
      zipCode: e.target.value
    })
  }
  async handleSubmit(e){
    e.preventDefault()
    const zip = this.state.zipCode
    const restData = await getYelp(zip)
      this.setState({
        restaurant: restData
    })
  }
  render() {
    return (

      <div className="App">
        <Header />
        <Homepage onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <Nav />
        <RestaurantList restaurant={this.state.restaurant} />
        <RestaurantPage />
        <Footer />

      </div>
    );
  }
}

export default App;
