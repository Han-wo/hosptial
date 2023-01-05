import './App.css';
import '../src/css/style.css';
import React from 'react';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import NavBar from './components/NavBar';
import routes from './routes';
import Footer from './components/Footer';


function App() {
  return(
    <Router>
      <NavBar/>
      <div className='container'>
        <Switch>
            {routes.map((route) => {
            return <Route key={route.path} exact path={route.path} component={route.component}/>;
          })}
        </Switch>
      </div>
      <Footer/>
    </Router>
  )
}

{/* <Route path='/' exact>
<HomePage/>
</Route>
<Route path='/Create' exact>
<CreatePage/>
</Route>
<Route path='/Edit' exact>
<EditPage/>
</Route>
<Route path='/Map' exact>
<MapPage/>
</Route> */}

export default App;
