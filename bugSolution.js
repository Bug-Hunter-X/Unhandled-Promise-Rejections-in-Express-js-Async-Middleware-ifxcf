const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    console.error('Error:', err); // Log the error for debugging
    res.status(500).send('Something went wrong!'); // Send an error response
  });
});

async function someAsyncOperation() {
  // Simulate an error (replace with your actual async operation)
  throw new Error('Something went wrong in async operation');
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});