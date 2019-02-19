import React, { Component } from 'react';
import './App.css';
import ProductListContainer from './containers/ProductListContainer';
import ProductDetailContainer from './containers/ProductDetailContainer';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
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
