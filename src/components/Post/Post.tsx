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
  slug: string
  profileImg?: string
  location?: string
  likeCount: number
}) {
  const {
    ownerCommentName,
    ownerCommentText,
    src,
    slug,
    profileImg,
    location,
    likeCount
  } = props

  return (
    <div>
      {/* heading */}
      <Heading profileImg={profileImg} location={location} slug={slug} />

      {/* media */}
      <div className={style.media}>
        <img alt="" src={src} />
      </div>

      {/* actions */}
      <Actions />

      {/* like count */}
      <LikeCount count={likeCount} />
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
