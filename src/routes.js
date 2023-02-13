import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

import ListPage from './pages/ListPage';
import LogIn from './pages/LogInPage';
import Register from './pages/RegisterPage';
import ReviewDetail from './components/board/ReviewDetail'
import Map from './components/Map/Map';

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
  // {
  //   path :'/hosp/Map',
  //   component:MapComponent
  // }
  ,
  {
    path :'/hosp/Map',
    component:Map
  },
  {
    path : '/hosp/detail',
    component: ReviewDetail

  }
  ]
  
  export default routes;