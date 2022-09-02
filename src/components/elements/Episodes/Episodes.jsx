import { useState } from 'react';
import Slider from '../../UI/Slider/Slider';

import SeasonsList from './SeasonsList/SeasonsList';
import { DATA } from '../../../data';

import styles from './Episodes.module.scss';
import clsx from 'clsx';

const Episodes = () => {

  const [season, setSeason] = useState(1);
  const [showSeasonsList, setShowSeasonsList] = useState(false)

  const nandleClose = () => setShowSeasonsList(false);
  const nandleOpen = () => setShowSeasonsList(true);

  return (
    <div className={styles.wrapper}>
      <img
        src={DATA[0].logo}
        alt={DATA[0].name}
        width='200'
        style={{ opacity: .7 }}
      />
      <div className={styles.links}>
        <div
          className={styles.season}
          onClick={showSeasonsList ? nandleClose : nandleOpen}>
          <span> {season} season  </span>
          <i className='bx bxs-down-arrow' ></i>
        </div>
        <div className={styles.seeAll}>
          <span>See all</span>
          <i className='bx bx-chevron-right'></i>
        </div>
      </div>
      <SeasonsList
        showSeasonsList={showSeasonsList}
        setShowSeasonsList={setShowSeasonsList}
      />
      <Slider
        photos={
          season === 1
            ? DATA[0].seasons[0].photos
            : season === 2
              ? DATA[0].seasons[1].photos
              : DATA[0].seasons[2].photos
        }
        spaceBetween={25}
        slidesPerView={5}
      />
    </div>
  )
}


export default Episodes;