import React, { Component } from 'react';
import ProductList from '../components/ProductList/index';
import SearchBox from '../components/SearchBox/index';
import axios from 'axios';

class ProductListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [], 
            loading: true,
            error: null,
            term: ''
        }
        this.filterProduct = this.filterProduct.bind(this)
    }

    componentDidMount() {
        this.fetchProducts()
    }

    fetchProducts() {
        const {term} = this.state
        axios.get(`http://localhost:8080/products?q=${term}`)
          .then(res => {
            this.updateProducts(res)
        }).catch(err => {
            this.updateError(err)
        })
    }

    filterProduct(e) {
        this.setState({
            term: e.target.value
        }, this.fetchProducts)
    }

    updateProducts(res) {
        this.setState({
            products: res.data,
            loading: false
        })
    }

    updateError(err) {
        this.setState({
            loading: false,
            error: err
        })
    }
    
    render() {
        return (
            <div>
                <SearchBox term={this.state.term} onChange={this.filterProduct} />
                <ProductList {... this.state} />
            </div>
        )
    }
}

export default ProductListContainer;