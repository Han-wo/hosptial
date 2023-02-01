
import React from 'react';
import {useState , useEffect} from 'react'
import axios from 'axios';
import Pagination from './Pagination';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import moment from 'moment'


const ListPage = () => {
    const [post,setPost] = useState([])
    const getPost = () =>{
        axios.get('http://localhost:3004/posts').then((res) => {
            setPost(res.data)

        })
    }

    useEffect(() => {
        getPost()
    },[])

    

    return(
        <div className="main_content">
        <div className="main_inner list_wrap">
          {/* <div className="hospital_wrap">
            <div className="hospital_list">
        
          
            </div>
          </div> */}
          <div className="list_inner">
            <div className="inner_tit">
              <h1>리뷰</h1>
              <div className="input_wrap">
                <input className="noborder" type="text" placeholder="검색하기" />
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
            <div className="listdetail_wrap">
              <div className="list_bx">
                <h2>제목</h2>
                <p className="content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            
                </p>
                <p className="date">2022.12.30</p>
              </div>
              <div className="list_bx">
                <h2>제목</h2>
                <p className="content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          
                </p>
                <p className="date">2022.12.30</p>
              </div>
              <div className="list_bx">
                <h2>제목</h2>
                <p className="content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          
                </p>
                <p className="date">2022.12.30</p>
              </div>
              <div className="list_bx">
                <h2>제목</h2>
                <p className="content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            
                </p>
                <p className="date">2022.12.30</p>
              </div>
              <div className="list_bx">
                <h2>제목</h2>
                <p className="content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              
                </p>
                <p className="date">2022.12.30</p>
              </div>
              <div className="list_bx">
                <h2>제목</h2>
                <p className="content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
                 
                </p>
                <p className="date">2022.12.30</p>
              </div>
              <div className="list_bx">
                <h2>제목</h2>
                <p className="content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
               
                </p>
                <p className="date">2022.12.30</p>
              </div>
              <div className="list_bx">
                <h2>제목</h2>
                <p className="content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            .
                </p>
                <p className="date">2022.12.30</p>
              </div>
            </div>
            <div className="btn_wrap">
              <button className='write_btn'><Link to ="/hosp/create">글쓰기</Link></button>
            </div>
            <div className="pagenation">
              <i className="fa-solid fa-chevron-left arrow" />
              <ol id="numbers">
                <li className="active">
                  <a href="javascript:void(0)">1</a>
                </li>
                <li>
                  <a href="javascript:void(0)">2</a>
                </li>
                <li>
                  <a href="javascript:void(0)">3</a>
                </li>
              </ol>
              <i className="fa-solid fa-chevron-right arrow" />
            </div>
          </div>
        </div>
      </div>
    )
 
}

export default ListPage;