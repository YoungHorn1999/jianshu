import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import { 
    LoginWrapper,
    LoginBox,
    Input,
    Button 
} from './style'

class Login extends Component {
    render() {
        if(!this.props.loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => {this.account = input}}></Input>
                        <Input placeholder="密码" type="password" ref={(input) => {this.password = input}}></Input>
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to="/"/>
        }
    }

}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(["login", "login"])
})

const mapDispatchToProps = (dispatch) => ({
    login(account, password) {
        dispatch(actionCreators.login(account.value, password.value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)