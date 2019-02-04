import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/products')
      .then(res => {
        this.setState({
          products: res.data
        })
      })
  }

  render() {
    const {products} = this.state
    
    return (
      <div className="App">
        <h1>Storeroom Products</h1>
        <ProductList products={products} s/>
      </div>
    );
  }
}

export default App;
