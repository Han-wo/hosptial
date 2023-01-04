import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import MapPage from './pages/MapPage';

const routes = [
    {
      path:'/',
      component:HomePage
  },
  {
    path:'/Create',
    component:CreatePage
  },
  {
    path:'/Edit',
    component:EditPage
  },
  {
    path:'/Map',
    component:MapPage
  },
  ]
  
  export default routes;