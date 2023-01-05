import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import MapPage from './pages/MapPage';
import ListPage from './pages/ListPage';

const routes = [
    {
      path:'/',
      component:HomePage
  },
  {
    path:'/hosp/create',
    component:CreatePage
  },
  {
    path:'/hosp/edit',
    component:EditPage
  },
  {
    path:'/hosp/map',
    component:MapPage
  },
  {
    path:'/hosp/list',
    component:ListPage
  },
  ]
  
  export default routes;