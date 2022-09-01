
import styles from './BottomNavigation.module.scss';

const tabs = [
  {
    id: 1,
    name: 'Overview'
  },
  {
    id: 2,
    name: 'Episodes'
  },
  {
    id: 3,
    name: 'Details'
  },
]

const BottomNavigation = ({ activeTab, setActiveTab }) => {
  return (
    <nav className={styles.nav}>
      {tabs.map(btn => (
        <button
          key={btn.id}
          onClick={() => setActiveTab(btn.id)}
          className={activeTab === btn.id ? styles.active : ''}
        >
          {btn.name}
        </button>
      ))}
    </nav>
  )
}



export default BottomNavigation;