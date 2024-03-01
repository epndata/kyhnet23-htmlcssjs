import React, { useEffect, useState } from 'react'
import GridItemsSection from './sections/GridItemsSection'

const News = () => {
    const url = 'https://kyhnet23-assignment.azurewebsites.net/api/news'
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setNews(data)
        }
        fetchData()
    }, [])

    return (
        <section id="news">  
            <div className="container mt-2">
                <GridItemsSection title="Our News" items={news} />
            </div>
        </section>
    )
}

export default News