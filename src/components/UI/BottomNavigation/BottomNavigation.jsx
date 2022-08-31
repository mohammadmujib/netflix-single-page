
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
          className={activeTab === btn.id ? activeTab : ''}
          onClick={() => setActiveTab(btn.id)}
        >
          {btn.name}
        </button>
      ))}
    </nav>
  )
}



export default BottomNavigation;