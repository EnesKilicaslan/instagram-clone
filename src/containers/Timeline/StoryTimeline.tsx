import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import style from './StoryTimeline.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { LeftArrow, RightArrow } from '../../assets/icons'
import ProfileStory from '../../components/Profile/ProfileStory'

function StoryTimeline() {
  return (
    <div className={style.container}>
      <Swiper
        navigation={{
          prevEl: `.${style.prevSlideArrow}`,
          nextEl: `.${style.nextSlideArrow}`
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
