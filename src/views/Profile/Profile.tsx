import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import style from './Profile.module.css'

function Profile() {
  return (
    <>
      <div>Profile</div>

      <div className={style.profileNavigation}>
        <NavLink to="posts">Posts</NavLink>
        <NavLink to="igtv">IGTv</NavLink>
        <NavLink to="saved">Saved</NavLink>
        <NavLink to="tagged">Tagged</NavLink>
      </div>
      <br />
      <Outlet />
    </>
  )
}

export default Profile
