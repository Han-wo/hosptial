import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReviewDetail = () => {
  const [review, setReview] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3004/post/${review.id}`)
      .then((response) => {
        setReview(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <h2>{review.title}</h2>
      <p>{review.content}</p>
      <p>{review.rating}</p>
    </div>
  );
};

export default ReviewDetail;
