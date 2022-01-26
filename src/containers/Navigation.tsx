import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './Navigation.module.css'
import {
  Home,
  HomeFill,
  Explore,
  ExploreFill,
  Direct,
  DirectFill,
  Like,
  LikeFill,
  NewPost
} from './../assets/icons/'
import Avatar from '../components/Avatar/Avatar'

type Active = 'home' | 'dm' | 'explore' | 'likes' | 'profile'

function Navigation() {
  const [active, setActive] = useState<Active>('home')

  const activate = (
    isActive: boolean,
    path: Active,
    activeStyle?: React.CSSProperties,
    nonActiveStyle?: React.CSSProperties
  ): React.CSSProperties => {
    if (isActive) {
      setActive(path)
      return activeStyle
    }
    return nonActiveStyle
  }

  return (
    <nav className={style.navigation}>
      <NavLink
        to="/"
        style={(activeNav) => activate(activeNav.isActive, 'home')}
      >
        {active === 'home' ? <HomeFill /> : <Home />}
      </NavLink>
      <NavLink
        to="/direct-message"
        style={(activeNav) => activate(activeNav.isActive, 'dm')}
      >
        {active === 'dm' ? <DirectFill /> : <Direct />}
      </NavLink>
      <Link to="/new-post">
        <NewPost />
      </Link>
      <NavLink
        to="/explore"
        style={(activeNav) => activate(activeNav.isActive, 'explore')}
      >
        {active === 'explore' ? <ExploreFill /> : <Explore />}
      </NavLink>
      <NavLink
        to="/likes"
        style={(activeNav) => activate(activeNav.isActive, 'likes')}
      >
        {active === 'likes' ? <LikeFill /> : <Like />}
      </NavLink>
      <NavLink
        to="/profile"
        style={(activeNav) => activate(activeNav.isActive, 'profile')}
      >
        <Avatar size="s" />
      </NavLink>
    </nav>
  )
}

export default Navigation
