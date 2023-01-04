import React from 'react';
import {useState} from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const NavBar = () =>{
    return(
        <header className="header">
        <div className="nav-wrap">
        <div className="logo">
        <a href="javascript:void(0)">
          <h1>
            Fn<span style={{ color: "#A9A0FC" }}>D</span>oc
          </h1>
        </a>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link to="javascript:void(0)">회사소개</Link>
          </li>
          <li>
            <Link to="/Create">리뷰쓰기</Link>
          </li>
          <li>
            <Link to="javascript:void(0)">가격정보</Link>
          </li>
          <li>
            <Link to="javascript:void(0)">건강정보</Link>
          </li>
        </ul>
      </div>
      <div className="login">
        <ul>
          <li>
            <Link to="javascript:void(0)">로그인</Link>
          </li>
          <li>
            <Link to="javascript:void(0)">회원가입</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
    )

};

export default NavBar;