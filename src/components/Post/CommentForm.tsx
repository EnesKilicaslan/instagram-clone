import React, { useRef, useState } from 'react'
import { Emoji } from '../../assets/icons'
import style from './CommentForm.module.css'

const LINE_HEIGHT = 16

function CommentForm() {
  const textareaRef = useRef(null)
  const [numLines, setNumLines] = useState(1)

  function numOfLines(lineHeight: number) {
    var h0 = textareaRef.current.style.height
    textareaRef.current.style.height = 'auto'
    var h1 = textareaRef.current.scrollHeight
    console.log('h1: ', h1)
    textareaRef.current.style.height = h0
    return Math.floor(h1 / lineHeight)
  }

  return (
    <form action="" className={style.form}>
      <button type="button">
        <Emoji />
      </button>

      <textarea
        className={style.input}
        placeholder="Add a comment..."
        rows={1}
        ref={textareaRef}
        onChange={() => {
          setNumLines(numOfLines(LINE_HEIGHT))
        }}
        style={{ height: `${numLines * LINE_HEIGHT + 4}px` }}
      ></textarea>

      <button type="button" className={style.submit}>
        Post
      </button>
    </form>
  )
}

export default CommentForm
