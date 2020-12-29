import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeLogin = () => ({
    type: actionTypes.CHANGE_LOGIN,
})

export const logout = () => ({
    type: actionTypes.LOGOUT
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
            if(res.data.data) {
                dispatch(changeLogin())
            } else {
                console.log('登录失败');
            }
        })
    }
}