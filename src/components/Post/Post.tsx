import React from 'react'
import Heading from './Heading'
import postImg from '../../assets/a.jpg'
import style from './Post.module.css'
import Actions from './Actions'
import LikeCount from './LikeCount'
import Comment from './Comment'

function Post(props: { ownerCommentName: string; ownerCommentText: string }) {
  const { ownerCommentName, ownerCommentText } = props

  return (
    <div>
      {/* heading */}
      <Heading />

      {/* media */}
      <div className={style.media}>
        <img alt="Girl in a jacket" width="500" height="600" src={postImg} />
      </div>

      {/* actions */}
      <Actions />

      {/* like count */}
      <LikeCount count={843} />
      {/* comments */}

      <Comment
        ownerName={ownerCommentName}
        ownerText={ownerCommentText}
        count={32}
      />

      {
        // comment form
      }
    </div>
  )
}

export default Post
