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
        this.filterProduct = this.filterProduct.bind(this)
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

    filterProduct(e) {
        this.setState({
            term: e.target.value
        })

        axios.get(`http://localhost:8080/products?q=${e.target.value}`)
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
            <div>
                <input type="text" className="search" placeholder="Type to search" 
                    onChange={this.filterProduct} value={this.state.term}/>
                <ProductList {... this.state} />
            </div>
        )
    }
}

export default ProductListContainer;