import React from 'react';
import {useState} from 'react'
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import child from '../images/icon/child.svg'
import dent from '../images/icon/dent.svg'
import derm from '../images/icon/derm.svg'
import ears from '../images/icon/ears.svg'
import eyes from '../images/icon/eyes.svg'
import han from '../images/icon/han.svg'


const HomePage = () =>{

    return(
    <div id="wrap">
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
            <Link href="javascript:void(0)">회사소개</Link>
          </li>
          <li>
            <Link href="javascript:void(0)">리뷰쓰기</Link>
          </li>
          <li>
            <Link href="javascript:void(0)">가격정보</Link>
          </li>
          <li>
            <Link href="javascript:void(0)">건강정보</Link>
          </li>
        </ul>
      </div>
      <div className="login">
        <ul>
          <li>
            <Link href="javascript:void(0)">로그인</Link>
          </li>
          <li>
            <Link href="javascript:void(0)">회원가입</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
  {/* main content */}
  <div className="main_content">
    <div className="swiper mySwiper main-slide">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slide_img img1">
            <div className="slide_txt">
              <h2>모두에게 필요한</h2>
              <h1>병원정보</h1>
              <a href="javascript:void(0)">찾아보기</a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slide_img img2">
            <div className="slide_txt">
              <h2>모두에게 필요한</h2>
              <h1>병원정보</h1>
              <a href="javascript:void(0)">찾아보기</a>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="slide_img img3">
            <div className="slide_txt">
              <h2>모두에게 필요한</h2>
              <h1>병원정보</h1>
              <a href="javascript:void(0)">찾아보기</a>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
    <div className="main_inner">
      <div className="inner_tit">
        <h1>
          나에게 꼭 맞는 <span style={{ color: "#A9A0FC" }}>병원</span> 찾기
        </h1>
        <div className="input_wrap"></div>
      </div>
      <div className="inner_grid_wrap">
        <div className="location_bx">
          <img src="../images/icon/dent.svg" alt="" />
          <h3>치과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/eyes.svg" alt="" />
          <h3>안과</h3>
        </div>
        <div className="location_bx">
          <img src={derm}alt="" />
          <h3>피부과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/plas.svg" alt="" />
          <h3>성형외과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/plas.svg" alt="" />
          <h3>산부인과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/mental_new.svg" alt="" />
          <h3>정신의학과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/pee.svg" alt="" />
          <h3>비뇨기과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/sprint.svg" alt="" />
          <h3>정형외과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/stun.svg" alt="" />
          <h3>마취의학과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/nsurgery.svg" alt="" />
          <h3>신경외과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/rehab.svg" alt="" />
          <h3>재활의학과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/video.svg" alt="" />
          <h3>영상의학과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/surgery.svg" alt="" />
          <h3>외과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/neuron.svg" alt="" />
          <h3>신경과</h3>
        </div>
        <div className="location_bx">
          <img src={child} alt="" />
          <h3>소아과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/inner.svg" alt="" />
          <h3>내과</h3>
        </div>
        <div className="location_bx">
          <img src={ears} alt="" />
          <h3>이비인후과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/home.svg" alt="" />
          <h3>가정의학과</h3>
        </div>
        <div className="location_bx">
          <img src="../resource/images/icon/han.svg" alt="" />
          <h3>한의원</h3>
        </div>
      </div>
      <div className="map_review">
        <div className="map_bx">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1634512.497698184!2d127.65906660156253!3d36.85667040970604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356455ebcb11ba9b%3A0x91249b00ba88db4b!2z64yA7ZWc66-86rWt!5e0!3m2!1sko!2skr!4v1672358925788!5m2!1sko!2skr"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="review_bx">
          <div className="review_tit">
            <h2>게시판</h2>
            <a href="javascript:void(0)">
              <i className="fa-solid fa-plus" />
            </a>
          </div>
          <div className="review_txt">
            <ul className="review">
              <li>
                <a href="javascript:void(0)">
                  <div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sequi ducimus quod expedita nihil sed, illum repellendus
                      obcaecati incidunt, cumque itaque quia quibusdam eaque
                      magnam assumenda? Fugit neque iusto aspernatur!
                      Asperiores!
                    </p>
                    <p>2022.12.30</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sequi ducimus quod expedita nihil sed, illum repellendus
                      obcaecati incidunt, cumque itaque quia quibusdam eaque
                      magnam assumenda? Fugit neque iusto aspernatur!
                      Asperiores!
                    </p>
                    <p>2022.12.30</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sequi ducimus quod expedita nihil sed, illum repellendus
                      obcaecati incidunt, cumque itaque quia quibusdam eaque
                      magnam assumenda? Fugit neque iusto aspernatur!
                      Asperiores!
                    </p>
                    <p>2022.12.30</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sequi ducimus quod expedita nihil sed, illum repellendus
                      obcaecati incidunt, cumque itaque quia quibusdam eaque
                      magnam assumenda? Fugit neque iusto aspernatur!
                      Asperiores!
                    </p>
                    <p>2022.12.30</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* main content */}
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
</div>

    )
    

};

export default HomePage;