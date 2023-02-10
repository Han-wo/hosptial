// import axios from 'axios';


// export const writePost = ({ title, body, rate}) =>
//     axios.post('http://localhost:3001/post',{
//         title :title,
//         body :body, 
//         rate :rate
//     })
import client from "./client";


export const writePost = ({ title, body, rate}) =>
    client.post('/api/posts',{title,body, rate})