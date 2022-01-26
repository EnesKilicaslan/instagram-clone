import React, { useState } from 'react'
import {
  Like,
  LikeFill,
  Comment,
  Direct,
  Save,
  SaveFill
} from '../../assets/icons'
import style from './Actions.module.css'

function Actions() {
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className={style.actionButtons}>
      <button onClick={() => setIsLiked((prevLike) => !prevLike)}>
        {isLiked ? <LikeFill className={style.like} /> : <Like />}
      </button>

      <button>
        <Comment />
      </button>

      <button>
        <Direct />
      </button>

      <button
        className={style.last}
        onClick={() => setIsSaved((prevSave) => !prevSave)}
      >
        {isSaved ? <SaveFill /> : <Save />}
      </button>
    </div>
  )
}

export default Actions
