
import React from 'react';
import {useState , useEffect} from 'react'
import axios from 'axios';
import Pagination from './Pagination';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import moment from 'moment'


const ListPage = () =>{
    const [post,setPost] = useState([])
    const getPost = () =>{
        axios.get('http://localhost:3004/posts').then((res) => {
            setPost(res.data)

        })
    }
    getPost()
    
    return(
        <div></div>
    )
 
}

export default ListPage;