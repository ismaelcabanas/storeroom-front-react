import React, { Component } from 'react';
import './index.css';

class ProductList extends Component {
  
  render () {        
    if(this.props.loading) {
      return (<div className="loading" />)
    }
    if(this.props.error) {
      return (<div className="error" />)
    }
    return (      
      <div className="products">
      {
        this.props.products.map(product => {
          return (
            <div key={product.id} className="product">
              <h2 className="title">{product.name}</h2>
                <a href={`/products/${product.id}`} className="view-detail">View detail</a>
            </div>
          )
        })
      }
      </div>
    )
  }    
}
export default ProductList