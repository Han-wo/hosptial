import axios from 'axios';


export const writePost = ({ title, body, star}) =>
    axios.post('/api/posts',{
        title,
        body, 
        star
    })