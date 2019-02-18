import React, { Component } from 'react';

class ProductDetail extends Component {

    render() {
        const {product} = this.props
        return (
            <div className="detail">
                <div className="name">{product.name}</div> 
                <div className="stock">{product.stock}</div>  
            </div>
        )
    }
}

export default ProductDetail;