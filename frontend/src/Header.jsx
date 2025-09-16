import React from 'react'


const Header = () => {
  return (
  <header>
    <div className="logo"> 
        <img src="/logo.svg" alt="" loading='lazy' />
    </div>
    <div className="nav">
    <a href="#hire">
        <h1>hire
        me</h1>
    </a>

    </div>
  </header>
  )
}

export default Header