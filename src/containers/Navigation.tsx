import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navigation.module.css'
import { Home, Explore, Direct, Like } from './../assets/icons/'

function Navigation() {
  return (
    <nav className={style.navigation}>
      Instagram
      <input type="text" placeholder="search" />
      <NavLink to="/">
        <Home />
      </NavLink>
      <NavLink to="/direct-message">
        <Direct />
      </NavLink>
      <NavLink to="/explore">
        <Explore />
      </NavLink>
      <NavLink to="/likes">
        <Like />
      </NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  )
}

export default Navigation
