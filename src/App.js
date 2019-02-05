import React, { Component } from 'react';
import './App.css';
import ProductListContainer from './components/ProductListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Storeroom Products</h1>
        <ProductListContainer />
      </div>
    );
  }
}

export default App;
