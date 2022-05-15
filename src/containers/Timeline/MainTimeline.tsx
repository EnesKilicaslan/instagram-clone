import React from 'react'
import Post from '../../components/Post/Post'
import style from './MainTimeline.module.css'
import post1Img from '../../assets/natgeo-1.jpg'
import post2Img from '../../assets/therock-1.jpg'
import post3Img from '../../assets/selena-1.jpg'
import post4Img from '../../assets/beyonce-1.jpg'

const c1Text = `Photo by Robbie Shone @shonephoto | It's rare to touch the roof of a cave in Borneo's Gunung Mulu National Park because the caves are so large. Occasionally, though, sediment fills passages, closing up the gap. Pictured here in a space known as Wind Cave, professor Gina Moseley from Austria's University of Innsbruck admires limestone pendants while standing on one of these giant sediment banks. She's en route to a sampling site used by a team of paleoclimatologists.`,
  c1Owner = 'natgeo'

const c2Text = `My two little tornadoes made my birthday so special 🌪🌪 👧🏽👧🏽❤️❤️

I walked thru the door to a huge D.A.D. surprise made out of 🌹and they jumped in my arms in their little Polynesian dresses
🌺 🌊 🤙🏾🥰

Every man wants a son, but everyone man NEEDS a daughter.

(yes, that’s a massive pile of homemade birthday brownies and cookies that had no chance of survival once we blew these candles out 🤣💀💨🕯)`,
  c2Owner = 'mucahitmuglu'

const c3Owner = 'therock',
  c3Text = `Living in my Rare Impact sweatshirt.❤️ Created in honor of Rare Impact by @RareBeauty’s “Your Words Matter” educational campaign to inspire and educate on the power and influence of your words.
  ​100% of net proceeds support the Rare Impact Fund – our commitment to giving young people access to the resources they need to support their mental health. Available for a limited time only on RareBeauty.com`

const c4Text = `ABOUT LOVE | @tiffanyandco`,
  c4Owner = 'beyonce'

function MainTimeline() {
  return (
    <div className={style.timeline}>
      <Post
        ownerCommentName={c1Owner}
        ownerCommentText={c1Text}
        src={post1Img}
      />
      <br />
      <br />
      <Post
        ownerCommentName={c2Owner}
        ownerCommentText={c2Text}
        src={post2Img}
      />
      <br />
      <br />
      <Post
        ownerCommentName={c3Owner}
        ownerCommentText={c3Text}
        src={post3Img}
      />
      <br />
      <br />
      <Post
        ownerCommentName={c4Owner}
        ownerCommentText={c4Text}
        src={post4Img}
      />
      <br />
      <br />
    </div>
  )
}

export default MainTimeline
