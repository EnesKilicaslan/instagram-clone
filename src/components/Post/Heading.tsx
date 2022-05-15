import React, { useState } from 'react'
import style from './Heading.module.css'
import { More } from '../../assets/icons'
import Avatar from '../Avatar/Avatar'

function Heading({
  profileImg,
  location
}: {
  profileImg?: string
  location?: string
}) {
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  return (
    <div className={style.header}>
      <div className={style.owner}>
        <Avatar size="l" img={profileImg} />
        <div className={style.info}>
          <div className={style.username}>modernlife</div>
          {location && <div className={style.location}>{location}</div>}
        </div>
      </div>

      <More
        className={style.more}
        onClick={() => {
          setIsMoreOpen((prev) => !prev)
        }}
      />
    </div>
  )
}

export default Heading
