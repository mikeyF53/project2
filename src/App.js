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
  constructor(props) {
    super(props);
    this.state = {
      restaurant: [],
      zipCode: '',
      randomR: '',
      randomL: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }
  async componentDidMount() {
    const allRest = await getYelp();
    // console.log(allRest)
    this.setState({
      zipCode: '',
      restaurant: allRest,
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
    const restData = await getYelp(zip)
    const idx = Math.floor(Math.random() * 20)
    this.setState({
      restaurant: restData,
      randomR: restData[idx],
      randomL: restData[idx].location.display_address
    })
  }
 

  render() {
    return (
      <div className="App">
        <Header />
        <Homepage onSubmit={this.handleSubmit} onChange={this.handleChange} />
        <Nav />
        <RestaurantList restaurant={this.state.restaurant} />
        <RestaurantPage
          randRest={this.state.randomR}
          randAddress={this.state.randomL}
          randPhone={this.state.randomR} />


      </div>
    );
  }
}

export default App;
