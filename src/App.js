import React, { Component } from 'react';
import './App.css';

class App extends Component {

  renderProducts(products) {
    return(
      <div className="products">
      {
        products.map((product, index) => {
          return(
            <div key={index} className="product">
              <h2 className="title">{product.name}</h2>
            </div>
          )
        })
      }
      </div>
    )
  }

  render() {
    const products = [{"name": "Manzana"}, {"name": "Leche"}]

    return (
      <div className="App">
        <h1>Storeroom Products</h1>
        {this.renderProducts(products)}
      </div>
    );
  }
}

export default App;
