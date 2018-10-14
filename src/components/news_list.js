import React, { Component } from 'react'
import NewsItem from './news_list_item'


const NewsList = (props) => {

    const items = props.news.map((item) => {
        return (
            <NewsItem item={item} key={item.id} />
        )
    })

    return (
        <div>
            <div>{props.children}</div>
            <div>{items}</div>
        </div>

    )
}

export default NewsList

