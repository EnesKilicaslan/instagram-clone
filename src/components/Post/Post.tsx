import React from 'react'
import Heading from './Heading'
import postImg from '../../assets/a.jpg'
import style from './Post.module.css'

function Post() {
  return (
    <div className={style.post}>
      {/* heading */}
      <Heading />

      {/* media */}
      <div className={style.media}>
        <img alt="Girl in a jacket" width="500" height="600" src={postImg} />
      </div>

      {
        // actions
      }

      {
        // view count
      }

      {
        // comment list
      }

      {
        // time
      }

      {
        // comment form
      }
    </div>
  )
}

export default Post
