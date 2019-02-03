import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Storeroom Products</h1>
        <div className="products">
          <div className="product">
            <h2 className="title">Manzana</h2>
          </div>
          <div className="product">
            <h2 className="title">Leche</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
