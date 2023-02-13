import React, { Component, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from 'axios';

const categories = ['병원선택','외과', '치과', '내과','산부인과','정형외과','이비인후과','신경과','소아과'];

const ReviewForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState(categories[0]);



  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleRatingChange = (value) => {
    setRating(value);

  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };


  const handleSubmit = (e) => {
    
    e.preventDefault();

    const post = {
      title,
      content,
      rating,
      category,
      date: new Date(),
      };

    axios.post('http://localhost:3004/post', 
    post)
    .then((response) => {
      console.log(response.data);
      setTitle('');
      setContent('');
      setRating(0);
      setCategory("");
    })
    .catch((error) => {
      console.error(error);
    });
  }
  const modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ 'header': [1, 1, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      ['clean']
    ],
  }

  const formats = [
    //'font',
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align', 'color', 'background',        
  ]


  
  return (
    <form className="review-form">
      <div style={{marginTop: '10px',border:'0'}}>
        <label htmlFor="category-select">병원목록:</label>
        <select id="category-select" 
          value={category} 
          onChange={handleCategoryChange} 
          style={{marginLeft: '10px'}}>

          {categories.map((category) => (
            <option 
              key={category} 
              value={category}>
                {category}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        placeholder="제목을 적어 주세요.."
        value={title}
        onChange={handleTitleChange}
        style={{ border: '0.3px solid',borderRadius:"0.05px" , width: '98.5%', marginTop:'20px'}}
      />
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        placeholder="리뷰를 적어 주세요.."
        style={{ width: '100%', height: '500px',marginTop:'10px' }}
        modules={modules}
        formats={formats}
      />
      
      <div className="form-group">
          <label htmlFor="rating">별점:</label>
          {[ 1, 2, 3, 4, 5 ].map((star) => (
            <span
              key={star}
              style={{ cursor: "pointer" ,color: "#A9A0FC",}}
              onClick={() => handleRatingChange(star)}              
            >
              {star <= rating ? "★" : "✩"}
            </span>
          ))}
        </div>

 

      <button
        type="primary"
        onClick={handleSubmit}
        disabled={!title || !content || !rating}
        style={{ width: '100px', marginTop: '-60px'}}
      >
        등록
      </button>
    </form>
  );
};

export default ReviewForm;