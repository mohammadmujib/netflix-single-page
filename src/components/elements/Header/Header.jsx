import Search from '../../UI/Search/Search';
import Profile from './Profile';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <a href='/'>
        <img src='' alt=''/>
      </a>
      <Search />
      <Profile />
    </div>
  )
}

export default Header;