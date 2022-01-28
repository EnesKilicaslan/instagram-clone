import React from 'react'
import Avatar from '../Avatar/Avatar'
import style from './ProfileCard.module.css'

function ProfileCard(props: {
  type?: 'self' | 'other'
  name: string
  userName: string
}) {
  const { type = 'self', name, userName } = props

  return (
    <div className={style.container}>
      <Avatar size={type === 'self' ? 'l' : 'm'} />
      <div className={style.userInfo}>
        <div className={style.slag}>{userName}</div>
        <div className={style.content}>{name}</div>
      </div>
      <button className={style.profileType}>
        {type === 'self' ? 'Switch' : 'Follow'}
      </button>
    </div>
  )
}

export default ProfileCard
