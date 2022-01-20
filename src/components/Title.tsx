import React, { ReactNode } from 'react'
import style from './Title.module.css'

function Title(props: { text: string }) {
  return <h2 className={style.title}>{props.text}</h2>
}

export default Title
