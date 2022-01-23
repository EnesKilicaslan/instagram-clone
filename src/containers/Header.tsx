import React from 'react'
import style from './Header.module.css'
import Navigation from './Navigation'
import Container from './Container'

function Header() {
  return (
    <header className={style.header}>
      <Container className={style.headerContainer}>
        <>
          <span className={style.logo}>Instagram</span>

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
