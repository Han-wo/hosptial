import React, { useEffect, useRef ,useState } from 'react';
// // editor import
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
// // styled-component import
import styled from 'styled-components';
// // pallet import
import palette from '../../lib/palette';
// // responsive component import
import Responsive from '../common/Responsive';



const EditorBlock = styled(Responsive)`
  padding-top: 3rem;
  padding-bottom: 5rem;
`;

const TitleInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 3rem;
  width: 90%;
`;

const QuillWrapper = styled.div`
    .ql-editor{
        padding:0;
        min-height: 500px;
        font-size: 1.12rem;
        line-height: 1.5;
    }
    .ql-editor .ql-blank::before{
        left: 0;
    }
`;
// const ReviewBoard = () => {
//   const [content, setContent] = useState("");
//   const [title, setTitle] = useState("");
//   const [rating, setRating] = useState(0);

//   const handleRatingChange = (value) => {
//     setRating(value);
//   };

  // const onsubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await axios.post("http://localhost:3001/post", { 
  //       title: title, 
  //       content : content, 
  //       rating : rating});
  //     setTitle("");
  //     setContent("");
  //     setRating(0);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
        const Editor = ({ title, body, onChangeField }) => {
          // quill 적용 div element 를 설정
          const quillElement = useRef(null);
          // quill instance 설정
          const quillInstance = useRef(null);
          const [rating, setRating] = useState(0);
          const handleRatingChange = (value) => {
               setRating(value);
               };
      
          useEffect(()=>{
              // useRef 로 DOM 요소에 접근하려면 .current 사용
              quillInstance.current = new Quill(quillElement.current,{
                  // 테마 snow, bubble 두 가지가 있으며 불러올 때  'quill/dist/quill.snow.css', 'quill/dist/quill.bubble.css' 두 가지중 골라서 사용
                  theme:'snow',
                  placeholder:'내용을 작성하세요..',
                  modules:{
                      toolbar:[
                          // toolbar option
                          [{header : '1'},{header: '2'}], //custom button values
                          // strike : 글씨에 밑줄
                          ['bold','italic','underline','strike','link'] , //toggle btn option
                          [{list: 'ordered'},{list:'bullet'}], // list option
                          ['blockquote','code-block','link','image'], // toggle btn option 
                      ]
                  }
              });
              // text-change event handler
              const quill = quillInstance.current;
              quill.on('text-change', ( delta, oldDelta, source) =>{
                  if (source === 'user'){
                      onChangeField({ key : 'body' ,value: quill.root.innerHTML})
                  }
              });
          },[onChangeField]);
      
          // input 은 e.target.value 로 설정
          const onChangeTitle = e =>{
              onChangeField({ key: 'title' , value : e.target.value})
          }
          
  return (
    
    <form className='Edit'>
    <div>
    <EditorBlock>
      <TitleInput 
      placeholder="제목을 입력하세요.."
      onChange={onChangeTitle}
      value={title}
       />
      <QuillWrapper>
          {/* 컴포넌트 내부의 DOM 을 외부에서도 사용하기 위해 컴포넌트에 직접 ref 전달 == DOM 에 ref 를 다는 것과 같음 */}
          <div ref={quillElement} />
      </QuillWrapper>
      </EditorBlock>
      <div className="form-group">
          <label htmlFor="rating">별점:</label>
          {[ 1, 2, 3, 4, 5 ].map((star) => (
            <span
              key={star}
              style={{ cursor: "pointer" ,color: "#A9A0FC"}}
              onClick={() => handleRatingChange(star)}              
            >
              {star <= rating ? "★" : "✩"}
            </span>
          ))}
        </div>
    </div>
    </form>
  );
};

export default Editor