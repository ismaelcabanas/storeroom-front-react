import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <input type="text" className="search" placeholder="Type to search" 
                value={this.props.term} onChange={this.props.onChange} />
        )
    }
}

export default SearchBox;