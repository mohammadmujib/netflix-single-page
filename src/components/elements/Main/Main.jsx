import { useState } from 'react';
import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import Sidebar from '../../UI/Sidebar/Sidebar';
import Information from './Information';

import styles from './Main.module.scss';

const Main = () => {
  const [sidebarShow, setSidebarShow] = useState(false)

  return (
    <div className={styles.wrapper}>
      <Sidebar
        sidebarShow={sidebarShow}
        setSidebarShow={setSidebarShow}
      />
      <div
        className={styles.main}
        style={{
          backgroundImage: `url(${DATA[0].mainImage})`,
          width: sidebarShow ? '90%' : '85%'
        }}
      >
        <Information
          movie={DATA[0]}
        />
        <BottomNavigation />
      </div>
    </div>
  )
}


export default Main;