import React from 'react'
import Avatar from '../Avatar/Avatar'
import style from './ProfileStory.module.css'

function ProfileStory(props: { slug: string }) {
  const { slug } = props
  return (
    <div className={style.container}>
      <Avatar size="l" />
      <div className={style.slug}>{slug}</div>
    </div>
  )
}

export default ProfileStory
