import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import {
  Settings,
  Posts as PostsIcon,
  Tagged as TaggedIcon,
  Saved as SavedIcon,
  IGTV as IGTVIcon
} from '../../assets/icons'
import Avatar from '../../components/Avatar/Avatar'
import style from './Profile.module.css'

type RouteType = 'posts' | 'igtv' | 'saved' | 'tagged'

function Profile() {
  const [active, setActive] = useState<RouteType>('posts')

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

      <div className={style.stories}></div>

      <div className={style.profileNavigation}>
        <div className={style.navigationContainer}>
          <div
            className={
              active === 'posts'
                ? `${style.navigationItem} ${style.navigationItemActive}`
                : style.navigationItem
            }
          >
            <NavLink
              to=""
              style={({ isActive }) => {
                isActive && setActive('posts')
                return null
              }}
            >
              <PostsIcon className={style.navigationIcon} />
              POSTS
            </NavLink>
          </div>
          <div
            className={
              active === 'igtv'
                ? `${style.navigationItem} ${style.navigationItemActive}`
                : style.navigationItem
            }
          >
            <NavLink
              to="igtv"
              style={({ isActive }) => {
                isActive && setActive('igtv')
                return null
              }}
            >
              <IGTVIcon className={style.navigationIcon} />
              IGTV
            </NavLink>
          </div>
          <div
            className={
              active === 'saved'
                ? `${style.navigationItem} ${style.navigationItemActive}`
                : style.navigationItem
            }
          >
            <NavLink
              to="saved"
              style={({ isActive }) => {
                isActive && setActive('saved')
                return null
              }}
            >
              <SavedIcon className={style.navigationIcon} />
              SAVED
            </NavLink>
          </div>
          <div
            className={
              active === 'tagged'
                ? `${style.navigationItem} ${style.navigationItemActive}`
                : style.navigationItem
            }
          >
            <NavLink
              to="tagged"
              style={({ isActive }) => {
                isActive && setActive('tagged')
                return null
              }}
            >
              <TaggedIcon className={style.navigationIcon} /> TAGGED
            </NavLink>
          </div>
        </div>
      </div>
      <br />
      <Outlet />
      <div className={style.end} />
    </>
  )
}

export default Profile
//b38
