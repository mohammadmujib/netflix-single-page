import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './Slider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
          <div className={styles.number}>{item.id}</div>
          <img src={item.img} alt='screenshot' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}


export default Slider;