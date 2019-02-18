import React, { Component } from 'react';
import ProductList from '../components/ProductList/index';
import axios from 'axios';

class ProductListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [], 
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/products')
          .then(res => {
            this.setState({
              products: res.data,
              loading: false
            })
        }).catch(err => {
            this.setState({
                loading: false,
                error: err
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