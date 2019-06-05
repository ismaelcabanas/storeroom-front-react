import * as types from './types'

const initialState = {
    term: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term
            }
        default:
            return state
    }
}