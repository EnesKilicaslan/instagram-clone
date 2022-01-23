import React from 'react'
import Container from './Container'
import style from './Main.module.css'

function Main(props: { children?: React.ReactElement }) {
  return (
    <main className={style.main}>
      <Container className={style.mainContainer}>{props.children}</Container>
    </main>
  )
}

export default Main
