import React, { Component } from 'react';
import './App.css';
import { CarContainer } from './04-car-store/CarContainer';
import fetch from 'isomorphic-fetch';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            cars: []
        }
    }

  componentWillMount() {
      this.getCars();
  }

  async getCars() {
      const carsData = await fetch('http://localhost:3000/data/cars.json');
      const carsJSON = await carsData.json();

      this.setState({
          cars: carsJSON.data
      });
  }

  render() {
    return (
      <div className="App">
          {this.state.cars.length && <CarContainer cars={this.state.cars}/>}
      </div>
    );
  }
}

export default App;
