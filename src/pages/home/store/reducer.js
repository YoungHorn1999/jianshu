import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    articlePage: 1,
    showScroll: false
})

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_HOME: 
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList)
            })
        case actionTypes.ADD_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.list)),
                articlePage: action.nextPage
            })
        case actionTypes.SHOW_SCROLL:
            return state.set('showScroll', true)
        case actionTypes.CLOSE_SCROLL:
            return state.set('showScroll', false)
        default:
            return state
    }
}

export default reducer