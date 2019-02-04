import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    const products = [{"name": "Manzana"}, {"name": "Leche"}]

    return (
      <div className="App">
        <h1>Storeroom Products</h1>
        <ProductList products={products} s/>
      </div>
    );
  }
}

export default App;
