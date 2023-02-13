import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const ReviewBoard = () => {
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

 

  useEffect(() => {
    axios
      .get('http://localhost:3004/post')
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleReviewTitleClick = (review) => {
  const updatedReview = { ...review, viewCount: review.viewCount + 1 };
  axios
  .put(`https://localhost:3004/post ${review.id}`, updatedReview)
  .then((response) => {
    const updatedReviews = reviews.map((r) =>
      r.id === review.id ? updatedReview : r
    );
    setReviews(updatedReviews);
  })
  .catch((error) => {
    console.error(error);
  });
};

const handleSearchInputChange = (e) => {
  setSearchTerm(e.target.value);
};

const filteredReviews = reviews.filter((review) =>
  review.category.toLowerCase().includes(searchTerm.toLowerCase())
);


  return (
    <div className="review-board">
      <table className="review-table">
        <thead>
          <tr>
            <th className="review-table-header">번호</th>
            <th className="review-table-header">병원종류</th>
            <th className="review-table-header">제목</th>
            <th className="review-table-header">조회수</th>
            <th className="review-table-header">별점</th>
          </tr>
        </thead>
        <tbody>
          {filteredReviews.map((review, index) => (
            <tr key={review.id} className="review-table-row">
              <td className="review-table-cell">{index + 1}</td>
              <td className="review-table-cell">{review.category}</td>
              <td className="review-table-cell">
                <Link to ={`/hosp/detail/ ${review.id}`} 
                onClick={() => handleReviewTitleClick(review)}>
                    {review.title}
                </Link>
              </td>
              <td className="review-table-cell">{review.viewCount}</td>
              <td className="review-table-cell">{review.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="search-bar">
        <input
          type="text"
          placeholder="병원 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ReviewBoard;