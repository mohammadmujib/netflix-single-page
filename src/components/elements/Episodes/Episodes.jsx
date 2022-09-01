import { useState } from 'react';
import Slider from '../../UI/Slider/Slider';

import { DATA } from '../../../data';

import styles from './Episodes.module.scss';

const Episodes = () => {

  const [season, setSeason] = useState(1)

  const data = DATA[0].photos.map((item, index) => {
    return {
      id: index + 1,
      img: item
    }
  })
  return (
    <div className={styles.wrapper}>
      <img
        src={DATA[0].logo}
        alt={DATA[0].name}
        width='200'
        style={{ opacity: .7 }}
      />
      <div className={styles.links}>
        <span className={styles.season}>{season} season</span>
        <span className={styles.seeAll}>See all</span>
      </div>
      <Slider
        data={data}
        spaceBetween={20}
        slidesPerView={5}
      />
    </div>
  )
}


export default Episodes;