import React from 'react'
import { useUserContext } from '../contexts/UserContext'

const ProfileInfo = () => {
  const { currentUser } = useUserContext()

  return (
    <div>
        <div>{currentUser.firstName} {currentUser.lastName}</div>
        <div>{currentUser.email}</div>
    </div>
  )
}

export default ProfileInfo