import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

import ListPage from './pages/ListPage';
import LogIn from './pages/LogInPage';
import Register from './pages/RegisterPage';
import Detail from './pages/PostPage'
import Landing from './components/views/Landing/Landing';

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
    component:Landing
  },
  {
    path : '/hosp/detail',
    component: Detail

  }
  ]
  
  export default routes;