import {setSearchTerm, fetchProducts} from './actions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import axios from 'axios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('ProductListContainer related actions', () => {
    it('Set search keyword', () => {
      const term = ''
      const expected = {
        type: 'SET_SEARCH_TERM',
        payload: {term}
      }
      const action = setSearchTerm(term)
      expect(action).toEqual(expected)
    })
  
    describe('Fetching data from remote', () => {
        it('Fetch data successfully', () => {
            const products = [
                {id: 1, name: 'Manzana'},
                {id: 2, name: 'Leche'}
            ]
            axios.get = jest.fn().mockImplementation(() => Promise.resolve({data: products}))
        
            const expectedActions = [
                {type: 'FETCH_PRODUCTS_PENDING'},
                {type: 'FETCH_PRODUCTS_SUCCESS', payload: products}
            ]
            const store = mockStore({products: []})
        
            return store.dispatch(fetchProducts('')).then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })            
        })
    })
})