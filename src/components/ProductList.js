import React, { Component } from 'react';

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
        this.props.products.map((product, index) => {
          return (
            <div key={index} className="product">
              <h2 className="title">{product.name}</h2>
            </div>
          )
        })
      }
      </div>
    )
  }    
}
export default ProductList