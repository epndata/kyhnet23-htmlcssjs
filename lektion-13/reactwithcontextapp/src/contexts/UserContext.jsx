import { useState, useEffect, createContext, useContext } from 'react'

const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({children}) => {
    const url = 'https://localhost:7124/api/users'

    const [currentUser, setCurrentUser] = useState({})

    const getCurrentUser = async () => {
        const res = await fetch(`${url}/current`)
        setCurrentUser(await res.json())
    }

    useEffect(() => {
        getCurrentUser()
    }, [])


    return <UserContext.Provider value={ {currentUser, getCurrentUser} }>
            {children}
        </UserContext.Provider>
}