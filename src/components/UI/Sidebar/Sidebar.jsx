import { NavLink } from "react-router-dom";

import styles from './Sidebar.module.scss';

const menu = [
  {
    title: 'Popular',
    path: '/popular'
  },
  {
    title: 'TV Shows',
    path: '/tvshows'
  },
  {
    title: 'Films',
    path: '/films'
  },
  {
    title: 'My list',
    path: '/mylist'
  }
]

const Sidebar = ({ sidebarShow, setSidebarShow }) => {
  return (
    <div
      className={styles.sidebar}
      style={{ width: sidebarShow ? '15%' : '10%' }}
    >
      <button onClick={() => setSidebarShow(!sidebarShow)}>
        <i className={`bx bx-${sidebarShow ? 'x' : 'menu-alt-left'}`}></i>
      </button>
      <ul className={sidebarShow ? styles.show : ''}>
        {menu.map(({ title, path }, index) => (
          <li key={index}>
            <NavLink
              className={styles.link}
              to={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div >
  )
}


export default Sidebar;