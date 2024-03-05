import React from 'react'
import { useUserContext } from '../contexts/UserContext'

const Header = () => {
    const { currentUser } = useUserContext()

    return (
        <div>
            {currentUser.email}
        </div>
    )
}

export default Header