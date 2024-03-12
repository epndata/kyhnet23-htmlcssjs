import { createContext, useState, useContext } from "react";

const AppStore = createContext()
export const UseAppStore = () => useContext(AppStore)

export const AppStoreProvider = ({children}) => {
    const apiUrl = "https://localhost:7219/api"


    const getData = async (endpoint) => {
        const res = await fetch(`${apiUrl}${endpoint}`, {
            method: 'get'
        })

        return await res.json()
        
    }

    const postData = async (myurl, body) => {
        const res = await fetch(`${apiUrl}${myurl}`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        return res
        
    }

    return (
        <AppStore.Provider value={{apiUrl, getData, postData}}>
            {children}
        </AppStore.Provider>
    )
}
