import React from 'react'
import Post from '../components/Post/Post'
import style from './Timeline.module.css'

function Timeline() {
  return (
    <div className={style.timeline}>
      <Post />
      <br />
      <br />
      <Post />
      <br />
      <br />
      <Post />
    </div>
  )
}

export default Timeline
