import axios from 'axios'
import * as actionTypes from './actionTypes'
// import { fromJS } from 'immutable'

const changeHomeData = (data) => ({
    type: actionTypes.CHANGE_HOME,
    articleList: data.articleList,
    topicList: data.topicList
})

const addHomeList = (data, page) => ({
    type: actionTypes.ADD_LIST,
    list: data.list,
    nextPage: page
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const data = res.data.data
            const action = changeHomeData(data)
            dispatch(action)
            }).catch(() => {
                console.log('error');
            })  
        }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const data = res.data.data
            page = page + 1
            dispatch(addHomeList(data, page))
        })
    }
}

export const showScrollTop = () => ({
    type: actionTypes.SHOW_SCROLL
})

export const closeScrollTop = () => ({
    type: actionTypes.CLOSE_SCROLL
})