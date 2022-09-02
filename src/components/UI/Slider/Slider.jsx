import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';
import 'swiper/css';

const Slider = ({ photos, spaceBetween = 50, slidesPerView = 5 }) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className={styles.swiper}
    >
      {photos.map((item, index )=> (
        <SwiperSlide className={styles.swiperslide} key={index}>
          <span className={styles.number}>{index+1}</span>
          <img src={item} alt='screenshot' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


export default Slider;