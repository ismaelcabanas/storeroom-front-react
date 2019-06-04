import axios from 'axios'

export const setSearchTerm = (term) => {
    return {type: 'SET_SEARCH_TERM', payload: {term}}
}

export const fetchProducts = () => {
    return (dispatch, getState) => {
      dispatch({type: 'FETCH_PRODUCTS_PENDING'})
      const state = getState()
      return axios.get(`http://localhost:8080/storeroom/1/products?q=${state.search.term || ''}`).then((res) => {
        dispatch({type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data})
      }).catch((err) => {
          dispatch({type: 'FETCH_PRODUCTS_FAILED', payload: {message: err.message}})
      })
    }
  }
