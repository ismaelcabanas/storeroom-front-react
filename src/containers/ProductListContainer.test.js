import {setSearchTerm} from './actions';

describe('ProductListContainer related actions', () => {
    it('Set search keyword', () => {
        const term = ''
        const expected = {
            type: 'SET_TERM_SEARCH',
            term
        }
        const action = setSearchTerm(term)

        expect(action).toEqual(expected)
    })
})