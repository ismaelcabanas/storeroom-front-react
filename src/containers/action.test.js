import {setSearchTerm} from './action'

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
  

})