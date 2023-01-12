import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import MapPage from './pages/MapPage';
import ListPage from './pages/ListPage';
import LogIn from './pages/LogIn';
import Register from './pages/Register';

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
  {
    path:'/hosp/Log',
    component:LogIn
  },
  {
    path:'/hosp/Reg',
    component:Register
  },
  ]
  
  export default routes;