import React, { useEffect } from 'react'
import { UseAppStore } from '../stores/AppStore'

const News = () => {
    const { news, getNews, statusMessage } = UseAppStore()

    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            <h1>{statusMessage}</h1>
            <div>
                {
                    news.map(item => (
                        <div key={item.id}>{item.title}</div>
                    ))
                }
            </div>
        </>
    )
}

export default News