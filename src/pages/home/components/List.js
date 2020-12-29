import React, { Component } from 'react'
import listImg from '../../../statics/list/list_img1.jpg'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import { 
    ListItem, 
    ListInfo,
    LoadMore 
} from '../style.js'

class List extends Component {
    render() {
        const { list, getMoreList, page } = this.props
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={"/detail/" + item.get("id")}>
                                <ListItem key={index}>
                                    <img 
                                        className='pic'
                                        alt="placeholder" 
                                        src={listImg}
                                    />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)