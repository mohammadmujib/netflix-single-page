import Slider from '../../UI/Slider/Slider';

import { DATA } from '../../../data';

import styles from './Episodes.module.scss';

const Episodes = () => {

  const data = DATA[0].photos.map((item, index) => {
    return {
      id: index + 1,
      img: item
    }
  })
  return (
    <>
    <img
        src={DATA[0].logo}
        alt={DATA[0].name}
    width='200'
    style={{ opacity: .7 }}
    />
    <Slider
    data={data}
    spaceBetween={50}
    slidesPerView={5}
    />
    </>
  )
}


export default Episodes;