import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import style from './StoryTimeline.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LeftArrow, RightArrow } from '../../assets/icons'
import ProfileStory from '../../components/Profile/ProfileStory'

import post1ProfileImg from '../../assets/natgeo-profile.jpg'
import post2ProfileImg from '../../assets/therock-profile.jpg'
import post3ProfileImg from '../../assets/selena-profile.jpg'
import post4ProfileImg from '../../assets/beyonce-profile.jpg'
import prof5 from '../../assets/prof2.jpeg'

function StoryTimeline() {
  return (
    <div className={style.container}>
      <Swiper
        navigation={{
          prevEl: `.${style.prevSlideArrow}`,
          nextEl: `.${style.nextSlideArrow}`,
          disabledClass: style.disabledArrow
        }}
        slidesPerView={7.5}
        slidesPerGroup={5}
      >
        <div className={style.prevSlideArrow}>
          <LeftArrow className={style.slideIcon} />
        </div>
        <div className={style.nextSlideArrow}>
          <RightArrow className={style.slideIcon} />
        </div>

        <SwiperSlide>
          <ProfileStory slug="natgeo" profileImg={post1ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="therock" profileImg={post2ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="selena" profileImg={post3ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="beyonce" profileImg={post4ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="selena" profileImg={post3ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="therock" profileImg={post2ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="natgeo" profileImg={post1ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="beyonce" profileImg={post4ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="natgeo" profileImg={post1ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="therock" profileImg={post2ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="prof" profileImg={prof5} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" profileImg={post1ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" profileImg={post2ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" profileImg={post3ProfileImg} />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
        <SwiperSlide>
          <ProfileStory slug="eneski" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default StoryTimeline
