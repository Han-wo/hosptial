import React from 'react';
import child from '../images/icon/child.svg'
import dent from '../images/icon/dent.svg'
import derm from '../images/icon/derm.svg'
import ears from '../images/icon/ears.svg'
import eyes from '../images/icon/eyes.svg'
import home from '../images/icon/home.svg'
import han from '../images/icon/han.svg'
import inner from '../images/icon/inner.svg'
import mental_new from '../images/icon/mental_new.svg'
import neuron from '../images/icon/neuron.svg'
import nsurgery from '../images/icon/nsurgery.svg'
import pee from '../images/icon/pee.svg'
import plas from '../images/icon/plas.svg'
import rehab from '../images/icon/rehab.svg'
import sprint from '../images/icon/sprint.svg'
import stun from '../images/icon/stun.svg'
import surgery from '../images/icon/surgery.svg'
import video from '../images/icon/video.svg'
import women from '../images/icon/women.svg';
import '../css/style.css';
import { Link } from 'react-router-dom';
import {Swiper, SwiperSilde, SwiperSlide} from 'swiper/react';
import '../css/swiper.min.css'
import '../css/swiper-bundle.min.css'



const HomePage = () =>{

    return(
    <div id="wrap">
  {/* main content */}
  <div className="main_content">
    <div className="swiper mySwiper main-slide">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slide_img img1">
            <div className="slide_txt">
              <h2>모두에게 필요한</h2>
              <h1>병원정보</h1>
              <Link to="/hosp/List">찾아보기</Link>
            </div>
          </div>
        </div>
        {/* <div className="swiper-slide">
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
        </div> */}
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
          <img src={dent} alt="" />
          <h3>치과</h3>
        </div>
        <div className="location_bx">
          <img src={eyes} alt="" />
          <h3>안과</h3>
        </div>
        <div className="location_bx">
          <img src={derm}alt="" />
          <h3>피부과</h3>
        </div>
        <div className="location_bx">
          <img src={plas} alt="" />
          <h3>성형외과</h3>
        </div>
        <div className="location_bx">
          <img src={women} alt="" />
          <h3>산부인과</h3>
        </div>
        <div className="location_bx">
          <img src={mental_new} alt="" />
          <h3>정신의학과</h3>
        </div>
        <div className="location_bx">
          <img src={pee} alt="" />
          <h3>비뇨기과</h3>
        </div>
        <div className="location_bx">
          <img src={sprint} alt="" />
          <h3>정형외과</h3>
        </div>
        <div className="location_bx">
          <img src={stun} alt="" />
          <h3>마취의학과</h3>
        </div>
        <div className="location_bx">
          <img src={nsurgery}alt="" />
          <h3>신경외과</h3>
        </div>
        <div className="location_bx">
          <img src={rehab} alt="" />
          <h3>재활의학과</h3>
        </div>
        <div className="location_bx">
          <img src={video} alt="" />
          <h3>영상의학과</h3>
        </div>
        <div className="location_bx">
          <img src={surgery} alt="" />
          <h3>외과</h3>
        </div>
        <div className="location_bx">
          <img src={neuron} alt="" />
          <h3>신경과</h3>
        </div>
        <div className="location_bx">
          <img src={child} alt="" />
          <h3>소아과</h3>
        </div>
        <div className="location_bx">
          <img src={inner} alt="" />
          <h3>내과</h3>
        </div>
        <div className="location_bx">
          <img src={ears} alt="" />
          <h3>이비인후과</h3>
        </div>
        <div className="location_bx">
          <img src={home} alt="" />
          <h3>가정의학과</h3>
        </div>
        <div className="location_bx">
          <img src={han} alt="" />
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

</div>

    )
    

};

export default HomePage;