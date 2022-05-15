import React from 'react'
import Heading from './Heading'
import style from './Post.module.css'
import Actions from './Actions'
import LikeCount from './LikeCount'
import Comment from './Comment'
import CommentForm from './CommentForm'

function Post(props: {
  ownerCommentName: string
  ownerCommentText: string
  src: string
}) {
  const { ownerCommentName, ownerCommentText, src } = props

  return (
    <div>
      {/* heading */}
      <Heading />

      {/* media */}
      <div className={style.media}>
        <img alt="Girl in a jacket" src={src} />
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
      <CommentForm />

      {
        // comment form
      }
    </div>
  )
}

export default Post
