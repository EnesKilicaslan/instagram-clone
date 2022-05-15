import React from 'react'
import Avatar from '../Avatar/Avatar'
import style from './ProfileStory.module.css'

function ProfileStory(props: { slug: string; profileImg?: string }) {
  const { slug, profileImg } = props
  return (
    <div className={style.container}>
      <Avatar size="l" img={profileImg} />
      <div className={style.slug}>{slug}</div>
    </div>
  )
}

export default ProfileStory
