import { useEffect } from "react";
import { useState } from "react";
import { useContext, createContext } from "react";
import { useLocation } from "react-router-dom";

const AppStore = createContext()
export const UseAppStore = () => useContext(AppStore)

export const AppStoreProvider = ({children}) => {
    const location = useLocation()
    const [allowShadow, setAllowShadow] = useState(false)
    const [news, setNews] = useState([])
    const [statusMessage, setStatusMessage] = useState('')

    const handleSubscribe = async (email) => {
        if (email !== '' || email !== undefined) {
            const res = await fetch(`https://kyhnet23-assignment.azurewebsites.net/api/subscribe?email=${email}`, {
                method: 'post'
            })

            if (res.status === 200)
                setStatusMessage('You are now subscribed')
    
            if (res.status   === 400)
                setStatusMessage('You must enter a valid email')

        } else {
            setStatusMessage('You must enter a valid email')
        }
    }


    useEffect(() => {
        if (location.pathname === "/news")
            setAllowShadow(true)
        else
            setAllowShadow(false)
    }, [])

    const getNews = async () => {
        const res = await fetch('https://kyhnet23-assignment.azurewebsites.net/api/news')
        setNews(await res.json())
    }


    return <AppStore.Provider value={{allowShadow, news, getNews, handleSubscribe, statusMessage}}>
        {children}
    </AppStore.Provider>
}