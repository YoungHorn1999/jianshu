import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actionCreators from './store/actionCreator'
import { actionCreators as loginActionCreators} from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoSwitch,
    SearchInfoTitle,
    SearchInfoItem,
    SearchInfoList
} from './style.js'


class Header extends Component {
    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
        const pageList = []
        const newList = list.toJS()
        if(newList.length) {
            for(let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }
        if(focused || mouseIn) {
            return (
            <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch 
                        onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                    >
                        <i  ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                        换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
            )
        } else {
            return null
        }
    }

    render() {
        const { focused, handleInputFocuse, handleInputBlur, list, login, logout } = this.props
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                        { login 
                            ? <NavItem className='right' onClick={logout}>退出</NavItem> 
                            : <Link to="/login"><NavItem className='right'>登录</NavItem></Link>
                        }
                    <NavItem className='right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch 
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocuse(list)}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                            &#xe614;
                        </i>
                        { this.getListArea() }
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to="/write">
                        <Button className='writting'>
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                    </Link>
                        <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocuse(list) {
            if(list.size === 0) {
                dispatch(actionCreators.getList())
            }
            const action = actionCreators.searchFocus()
            dispatch(action)
        },

        handleInputBlur() {
            const action = actionCreators.searchBlur()
            dispatch(action)
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },

        handleChangePage(page, totalPage, spin) {
            let orignAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if(orignAngle) {
                orignAngle = parseInt(orignAngle, 10)
            } else {
                orignAngle = 0
            }
            spin.style.transform = 'rotate(' + (orignAngle + 360) + 'deg)'
            if(page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        },

        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
