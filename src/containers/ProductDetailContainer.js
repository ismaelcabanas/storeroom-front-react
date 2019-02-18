import React, { Component } from 'react';
import axios from 'axios';
import ProductDetail from '../components/ProductDetail/index';

class ProductDetailContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:8080/products/${id}`)
          .then(res => {
            this.setState({
              product: res.data
            })
        })
    }
    
    render() {
        return (
            <ProductDetail {...this.state} />
        )
    }
}

export default ProductDetailContainer;