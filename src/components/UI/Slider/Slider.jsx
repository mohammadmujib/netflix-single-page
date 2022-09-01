import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';
import 'swiper/css';

const Slider = ({ data, spaceBetween = 50, slidesPerView = 5 }) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.swiper}
    >
      {data.map(item => (
        <SwiperSlide className={styles.swiperslide} key={item.id}>
          <span className={styles.number}>{item.id}</span>
          <img src={item.img} alt='screenshot' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


export default Slider;