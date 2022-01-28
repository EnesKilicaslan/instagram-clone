import React from 'react'
import Suggestions from '../../containers/Suggestions'
import { Timeline } from '../../containers/Timeline'
import style from './Home.module.css'

function Home() {
  return (
    <div className={style.home}>
      <Timeline />
      <Suggestions />
    </div>
  )
}

export default Home
