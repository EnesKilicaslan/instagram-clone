import React, { useEffect, useState } from 'react'
import style from './Comment.module.css'

function Comment(props: {
  ownerName: string
  ownerText: string
  count?: number
}) {
  const [isMoreVisible, setIsMoreVisible] = useState(true)
  const [moreText, setMoreText] = useState('')
  const { ownerName, ownerText, count } = props

  const splited = ownerText.split('\n')
  const separatedContent = splited.map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ))

  useEffect(() => {
    //   if there is only single line and if the line contains less than 120 chars
    //   then hide the more
    if (splited.length === 1 && splited[0].length < 120) {
      setIsMoreVisible(false)
    }
  }, [])

  useEffect(() => {
    if (isMoreVisible) {
      const text =
        splited[0].length < 120 ? splited[0] : splited[0].substring(0, 120)
      setMoreText(text)
    }
  }, [isMoreVisible])

  return (
    <div className={style.container}>
      <span className={style.owner}>{ownerName}</span>
      {isMoreVisible ? (
        <span>
          {moreText}

          <a onClick={() => setIsMoreVisible(false)} className={style.more}>
            ...more
          </a>
        </span>
      ) : (
        <span className={style.content}>{separatedContent}</span>
      )}
      {count > 1 && (
        <div className={style.count}>View all {count} comments</div>
      )}

      <div className={style.time}>14 HOURS AGO</div>
    </div>
  )
}

export default Comment
