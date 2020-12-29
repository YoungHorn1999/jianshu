import React, { Component } from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import { actionCreators } from './store'
import { connect } from 'react-redux'
import { 
    HomeWrapper, 
    HomeLeft,  
    HomeRight,
    BackTop
} from './style'

class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img 
                        className="banner-img" 
                        alt="placeholder" 
                        src="https://upload.jianshu.io/admin_banners/web_images/5010/8e6ff43ffeeadc5deb237a4c1da797b486904373.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                    />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo()
        dispatch(action)
    },

    changeScrollTopShow() {
        if(document.documentElement.scrollTop > 200) {
            dispatch(actionCreators.showScrollTop())
        } else {
            dispatch(actionCreators.closeScrollTop())
        }
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Home)