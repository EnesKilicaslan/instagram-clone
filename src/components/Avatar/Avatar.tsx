import React from 'react'
import profileImg from '../../assets/profile.jpg'
import style from './Avatar.module.css'

function Avatar(props: { size?: 's' | 'm' | 'l' | 'xl'; img?: string }) {
  const { size = 'm', img = profileImg } = props

  return (
    <figure className={style.avatar}>
      <img src={img} className={`${style.photo} ${style[size]}`} />
    </figure>
  )
}

export default Avatar
