import React from 'react'
import style from './Posts.module.css'
import p1 from '../../assets/camp.jpg'
import p2 from '../../assets/church.jpg'
import p3 from '../../assets/fun.jpg'
import p4 from '../../assets/istanbul.jpg'

function Posts() {
  return (
    <div className={style.photoContainer}>
      <div className={style.photoWrapper}>
        <img src={p1} alt="" className={style.photo} />
      </div>

      <div className={style.photoWrapper}>
        <img src={p2} alt="" className={style.photo} />
      </div>

      <div className={style.photoWrapper}>
        <img src={p3} alt="" className={style.photo} />
      </div>

      <div className={style.photoWrapper}>
        <img src={p3} alt="" className={style.photo} />
      </div>

      <div className={style.photoWrapper}>
        <img src={p4} alt="" className={style.photo} />
      </div>

      <div className={style.photoWrapper}>
        <img src={p1} alt="" className={style.photo} />
      </div>

      <div className={style.photoWrapper}>
        <img src={p2} alt="" className={style.photo} />
      </div>
    </div>
  )
}

export default Posts
