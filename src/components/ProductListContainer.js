import React, { Component } from 'react';
import ProductList from './ProductList';
import axios from 'axios';

class ProductListContainer extends Component {
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
        return (
            <ProductList {... this.state} />
        )
    }
}

export default ProductListContainer;