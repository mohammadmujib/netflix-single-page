import clsx from 'clsx';

import styles from './SeasonsList.module.scss';


const SeasonsList = ({ showSeasonsList, setShowSeasonsList }) => {

  return (
    <div
      className={showSeasonsList ? clsx(styles.seasons && styles.active) : styles.seasons}
      onClick={() => setShowSeasonsList(false)}
    >
      <ul
        className={showSeasonsList
          ? clsx(styles.seasons__content && styles.active)
          : styles.seasons__content}
      >
        <li>1 season</li>
        <li>2 season</li>
        <li>3 season</li>
      </ul>
    </div>
  )
}

export default SeasonsList;