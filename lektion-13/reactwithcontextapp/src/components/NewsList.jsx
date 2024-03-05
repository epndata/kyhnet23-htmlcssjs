import React, { useEffect } from 'react'
import { useNewsContext } from '../contexts/NewsContext'
import NewsItem from './NewsItem'

const NewsList = () => {
    const { news, getNews } = useNewsContext()

    useEffect(() => {
        getNews()
    })

    return (
        <div>
            {
                news.map(newsItem => (
                    <NewsItem key={newsItem.id} item={newsItem} />
                ))
            }
        </div>
    )
}

export default NewsList