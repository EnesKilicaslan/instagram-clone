import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Settings } from '../../assets/icons'
import Avatar from '../../components/Avatar/Avatar'
import style from './Profile.module.css'

function Profile() {
  return (
    <>
      <div className={style.infoContainer}>
        <div className={style.avatarContainer}>
          <Avatar size="xl" />
        </div>

        <section className={style.info}>
          <div className={style.edit}>
            <span className={style.slug}> enes.ki</span>
            <button className={style.editProfile}>Edit Profile</button>
            <Settings />
          </div>
          <div className={style.numbers}>
            <span>
              <span className={style.numberItem}>15</span> posts
            </span>
            <span>
              <span className={style.numberItem}>400</span> followers
            </span>
            <span>
              <span className={style.numberItem}>300</span> following
            </span>
          </div>
          <div className={style.name}>
            <h1>Enes Kilicaslan</h1>
            <h4>Slow Down</h4>
          </div>
        </section>
      </div>

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
