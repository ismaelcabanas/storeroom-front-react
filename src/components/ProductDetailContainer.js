import React, { Component } from 'react';
import axios from 'axios';

class ProductEditContainer extends Component {
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
        const {product} = this.state
        return (
            <div className="detail">
                <div className="name">{product.name}</div>    
            </div>
        )
    }
}

export default ProductEditContainer;