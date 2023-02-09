import React from 'react';
import {useState} from 'react'
import axios from 'axios';
import Editor from '../components/Write/Editor';
import Responsive from '../components/common/Responsive';
import WriteButton from '../components/Write/WriteButton';
import EditorContainer from '../container/write/EditorContainer';


const CreatePage = () =>{
  return(
    <div>
      <Responsive>
        <Editor/>
        <WriteButton/>  
      </Responsive>
    </div>
  )
    
};


export default CreatePage;


//const [title,setTitle] =useState('')
    // const [Body,setBody] = useState('')
    // const onsubmit = () =>{
    //   axios.post('http://localhost:3001/post',{
    //     title: title,
    //     Body: Body
    //   })
    // };
    // return(
    //     <div className="container">
    //     <h1>리뷰작성</h1>
    //     <div className='mb-3'>
    //       <label className="form-label">제목</label>
    //       <input className='form-control'
    //       value={title}
    //       onChange={(e)=>{
    //         setTitle(e.target.value)
    //       }}
    //       />
    //     </div>
    //     <div className='mb-3 mt-10;'>
    //       <label className="form-label">내용</label>
    //       <textarea
    //       className='form-control'
    //       value={Body}
    //       onChange={(e)=>{
    //         setBody(e.target.value)
    //       }}
    //       rows='20'
    //       />
    //     </div>
    //     <button 
    //     className='btn btn-primary'
    //     onClick={onsubmit}>올리기
    //     </button>
    //   </div>
    // )