/**
 * swiper@8.0.1 demo
 * 为了解决低版本swiper在react18的strictMode模式下不能使用的问题
 */
import React from 'react'
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import poem1 from '../../asserts/poem1.png';
import poem2 from '../../asserts/poem2.png';
import poem3 from '../../asserts/poem3.png';
import poem4 from '../../asserts/poem4.png';

const SwiperComponent = () => {
  return <div className='wrap'>
    <Swiper
      modules={[Autoplay, Pagination]}
      // direction='vertical'
      style={{ 
        width: '800px',
        height: '567px',
        borderRadius: '55px',
        marginTop: '30px',
      }}
      autoplay
      loop
      pagination={{
        clickable: true,
        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active',
      }}
    >
      <SwiperSlide key={1}>
        <img src={poem1} />
      </SwiperSlide>
      <SwiperSlide key={2}>
        <img src={poem2} />
      </SwiperSlide>
      <SwiperSlide key={3}>
        <img src={poem3} />
      </SwiperSlide>
      <SwiperSlide key={4}>
        <img src={poem4} style={{
          width: '800px',
          height: '567px',
        }} />
      </SwiperSlide>
    </Swiper>
  </div>
}

export default SwiperComponent
