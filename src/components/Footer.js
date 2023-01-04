import React from 'react';
import {useState} from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const Footer = () =>{
    return(
    <footer>
    <div className="footer_in">
      <div className="logo">
        <h1>FnDoc</h1>
      </div>
      <div className="footer_address">
        <p>주소: 경기도 성남시 분당구 불정로 우리집 </p>
        <p>번호: 010-8643-8661</p>
        <ul className="information">
          <li>
            <a href="#">이용약관</a>
          </li>
          <li>
            <a href="#">개인정보취급방침</a>
          </li>
          <li>
            <a href="#">위치기반서비스 이용약관</a>
          </li>
        </ul>
      </div>
      <div className="selection_wrap">
        <div className="sns">
          <ul>
            <li>
              <a href="javascript:void(0)">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

    )
}

export default Footer;