import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navigation.module.css'

function Navigation() {
  return (
    <>
      <nav className={style.navigation}>
        Instagram
        <input type="text" placeholder="search" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/direct-message">Dm</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/likes">Likes</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </>
  )
}

export default Navigation
