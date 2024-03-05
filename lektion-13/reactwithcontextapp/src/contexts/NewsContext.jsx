import { useState, useEffect, createContext, useContext } from 'react'

const NewsContext = createContext()

export const useNewsContext = () => useContext(NewsContext)

export const NewsProvider = ({children}) => {
    const url = 'https://kyhnet23-assignment.azurewebsites.net/api/news'

    const [news, setNews] = useState([])

    const getNews = async () => {
        const res = await fetch(url)
        setNews(await res.json())
    }

    return <NewsContext.Provider value={ {news, getNews} }>
            {children}
        </NewsContext.Provider>
}