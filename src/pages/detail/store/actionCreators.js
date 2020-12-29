import axios from "axios"
import * as actionTypes from './actionTypes'

const changeDetail = (data) => ({
    type: actionTypes.CHANGE_DETAIL,
    title: data.title,
    content: data.content
})

export const getDetailData = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then((res) => {
            const data = res.data.data
            dispatch(changeDetail(data))
        })
    }
}