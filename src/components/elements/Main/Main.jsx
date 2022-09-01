import { useState } from 'react';
import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import Sidebar from '../../UI/Sidebar/Sidebar';
import Episodes from '../Episodes/Episodes';
import Information from './Information';

import styles from './Main.module.scss';

const Main = () => {
  const [sidebarShow, setSidebarShow] = useState(false)
  const [activeTab, setActiveTab] = useState(1)

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
          width: sidebarShow ? '85%' : '90%',
        }}
      >
      {activeTab === 1
        ? <Information
          movie={DATA[0]}
        />
        : activeTab === 2 && <Episodes />
      }
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
    </div >
  )
}


export default Main;