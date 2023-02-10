// In your React component
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewDetail = (props) => {
  const [review, setReview] = useState({});
  
  useEffect(() => {
    const reviewId = props.match.params.id; // You can get the review id from the URL
    axios.get(`http://localhost:3004/post ${reviewId}`)
      .then(res => {
        setReview(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  
  return (
    <div>
      <h2>{review.title}</h2>
      <p>{review.content}</p>
      <p>Rating: {review.rating}</p>
    </div>
  );
};

export default ReviewDetail;