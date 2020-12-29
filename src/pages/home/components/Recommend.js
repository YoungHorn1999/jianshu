import React, { Component } from 'react'
import { RecommendWrapper,  RecommendItem } from '../style'
import recommendImg1 from '../../../statics/recommend/recommend-img1.png'
import recommendImg2 from '../../../statics/recommend/recommend-img2.png'
import recommendImg3 from '../../../statics/recommend/recommend-img3.png'
import recommendImg4 from '../../../statics/recommend/recommend-img4.png'

class Recommend extends Component {
    render() {
        const style = {
            marginTop: '28px'
        }
        return (
            <RecommendWrapper>
                <RecommendItem>
                    <img alt='' src={recommendImg1} className='img' style={style}/>
                </RecommendItem>
                <RecommendItem>
                    <img alt='' src={recommendImg2} className='img'/>
                </RecommendItem>
                <RecommendItem>
                    <img alt='' src={recommendImg3} className='img'/>
                </RecommendItem>
                <RecommendItem>
                    <img alt='' src={recommendImg4} className='img'/>
                </RecommendItem>
            </RecommendWrapper>
        )
    }
}

export default Recommend