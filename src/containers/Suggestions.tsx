import React from 'react'
import ProfileCard from '../components/ProfileCard'
import style from './Suggestions.module.css'

function Suggestions() {
  return (
    <div className={style.container}>
      <ProfileCard userName="enes.ki" name="Enes Kilicaslan" />

      {/* view all */}
      <div className={style.viewAll}>
        <div className={style.forYouText}>Suggestions For You</div>
        <button className={style.seeAllText}>See All</button>
      </div>

      <ProfileCard type="other" userName="bhscmidscs" name="followed by eric" />
      <ProfileCard
        type="other"
        userName="oasdasdasd"
        name="followed by nusret + 5 more"
      />
      <ProfileCard type="other" userName="metallica" name="New to Instagram" />
      <ProfileCard type="other" userName="bhscmidscs" name="followed by eric" />
      <ProfileCard
        type="other"
        userName="trainsing"
        name="followed by bork + 12 more"
      />
    </div>
  )
}

export default Suggestions
