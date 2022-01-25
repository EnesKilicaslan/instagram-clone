import React from 'react'
import style from './Header.module.css'
import Navigation from './Navigation'
import Container from './Container'
import logo from '../assets/icons/logo.png'

function Header() {
  return (
    <header className={style.header}>
      <Container className={style.headerContainer}>
        <>
          <div className={style.logo}>
            <img src={logo} />
          </div>

          <span className={style.searchContainer}>
            <input type="text" placeholder="Search" className={style.search} />
          </span>

          <Navigation />
        </>
      </Container>
    </header>
  )
}

export default Header
