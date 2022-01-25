import React from 'react'
import profileImg from '../../assets/profile.jpg'
import style from './Avatar.module.css'

function Avatar(props: { size?: 's' | 'm' | 'l' }) {
  const { size = 'm' } = props

  return (
    <figure className={style.avatar}>
      <img src={profileImg} className={`${style.photo} ${style[size]}`} />
    </figure>
  )
}

export default Avatar
