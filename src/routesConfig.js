import Films from "./components/elements/Main/Films/Films";
import Popular from "./components/elements/Main/Popular/Popular";
import TVShows from "./components/elements/Main/TVShows/TVShows";
import MyList from "./components/elements/Main/MyList/MyList";
import Main from "./components/elements/Main/Main";


const routesConfig = [
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/popular',
    element: <Popular />
  },
  {
    path: '/tvshows',
    element: <TVShows />
  },
  {
    path: '/films',
    element: <Films />
  },
  {
    path: '/mylist',
    element: <MyList />
  }
]

export default routesConfig;