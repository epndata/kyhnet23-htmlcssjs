import React from 'react'
import { UseAppStore } from '../../stores/AppStore'

const Header = () => {
  const { allowShadow } = UseAppStore()

  return (
    <header className={`${allowShadow ? 'shadow': ''}`}>
        header
    </header>
  )
}

export default Header