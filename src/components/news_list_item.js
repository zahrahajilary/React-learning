import React from 'react'
import classess from '../css/style.css'
// 
// import {css} from 'glamor'
const NewsItem = ({item}) => {

//    let news_item = css ({
//        padding:'20px',
//        boxSizing : 'border-box',
//        borderBottom : '1px solid gray',
//        ':hover':{
//            color:'red'
//        },
//        '@media(max-width:500px)':{
//            color:'blue'
//        }

//    }) 

//    let item_grey = css({
//        background:'lightgrey'
//    })
    
    return (
        
            <div className={classess.news_item}>
                <h3>{item.title}</h3>
                <div>
                    {item .feed}
                </div>
            </div>

    )
}

export default NewsItem 