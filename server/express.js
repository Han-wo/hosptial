const express = require('express');
const app = express();

// A mock database to store the reviews
const reviews = [
  { id: 1, title: 'First Review', content: 'This is a great product!', rating: 5 },
  { id: 2, title: 'Second Review', content: 'It could be better', rating: 3 },
  // ...
];

// Endpoint to get a review by id
app.get('/api/reviews/:id', (req, res) => {
  const reviewId = parseInt(req.params.id);
  const review = reviews.find(r => r.id === reviewId);
  if (!review) {
    return res.status(404).send({ message: 'Review not found' });
  }
  res.send(review);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});