import React from 'react'

const Header = ({displayShadow}) => {
  return (
    <header className={`${displayShadow ? 'shadow': ''}`}>
        header
    </header>
  )
}

export default Header