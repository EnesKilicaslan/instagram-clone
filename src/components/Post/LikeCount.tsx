import React from 'react'
import style from './LikeCount.module.css'

function LikeCount(props: { count: number }) {
  const { count } = props

  return <section className={style.likeCount}>{count} likes</section>
}

export default LikeCount
