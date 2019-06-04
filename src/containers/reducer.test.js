import reducer from './reducer'
import * as types from './types'

describe('Reducer', () => {
    it('Set the search keyword', () => {
        const initState = {term: ''}
        const action = {type: types.SET_SEARCH_TERM, term: 'manz'}

        const state = reducer(initState, action)

        expect(state.term).toEqual('manz')
    })
})