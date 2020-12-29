import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    login: false
})

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_LOGIN: 
            return state.set('login', true)
        case actionTypes.LOGOUT: 
            return state.set('login', false)
        default:
            return state
    }
}

export default reducer