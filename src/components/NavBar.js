import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";

const NavBar = () =>{
    return(
        <nav className="navbar">
        <div className="nav-wrap">
        <div className="logo">
        <Link to="/">
          <h1>
            Fn<span style={{ color: "#A9A0FC" }}>D</span>oc
          </h1>
        </Link>
      </div>
      <div className="nav2">
        <ul>
          <li>
            <Link to="#">회사소개</Link>
          </li>
          <li>
            <Link to="/hosp/create">리뷰쓰기</Link>
          </li>
          <li>
            <Link to="/hosp/list">리뷰보기</Link>
          </li>
          <li>
            <Link to="/hosp/Map">건강정보</Link>
          </li>
        </ul>
      </div>
      <div className="login2">
        <ul>
          <li>
            <Link to="/hosp/Log">로그인</Link>
          </li>
          <li>
            <Link to="/hosp/Reg">회원가입</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    )

};

export default NavBar;