import axios from 'axios'

export const setSearchTerm = (term) => {
    return {type: 'SET_SEARCH_TERM', payload: {term}}
}

export const fetchProducts = () => {
    return (dispatch) => {
      dispatch({type: 'FETCH_PRODUCTS_PENDING'})
      return axios.get(`http://localhost:8080/storeroom/1/products`).then((res) => {
        dispatch({type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data})
      })
    }
  }
