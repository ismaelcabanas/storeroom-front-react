import React, { Component } from 'react';
import './App.css';
import ProductListContainer from './components/ProductListContainer';
import ProductDetailContainer from './components/ProductDetailContainer';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Storeroom Products</h1>
        <main>
          <Route exact path="/" component={ProductListContainer} />
          <Route path="/products/:id" component={ProductDetailContainer} />
        </main>
      </div>
    );
  }
}

export default App;
