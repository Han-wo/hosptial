import logo from './logo.svg';
import './App.css';
import '../src/css/style.css';
import React from 'react';
import {useState} from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import CreatePage from './components/CreatePage';
import EditPage from './components/EditPage';
import MapPage from './components/MapPage';

function App() {
  return(
    <Router>
      <NavBar/>
      <div className='container'>
        <Switch>
          <Route path='/' exact>
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
          </Route>
        </Switch>
      </div>
    </Router>
  )
}


export default App;
