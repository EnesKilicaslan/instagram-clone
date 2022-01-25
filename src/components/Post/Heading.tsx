import React, { useState } from 'react'
import style from './Heading.module.css'
import { More } from '../../assets/icons'
import Avatar from '../Avatar/Avatar'

function Heading() {
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  return (
    <div className={style.header}>
      <div className={style.owner}>
        <Avatar size="l" />
        <div className={style.info}>
          <div className={style.username}>modernlife</div>
          <div className={style.location}>Palo Alto, California</div>
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
