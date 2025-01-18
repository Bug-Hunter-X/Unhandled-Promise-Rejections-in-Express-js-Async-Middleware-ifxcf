const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    console.error('Error:', err);
    // Express.js doesn't automatically handle errors in async middleware
    // This means the error is swallowed if you don't handle it explicitly
    res.status(500).send('Something went wrong!');
  });
});

async function someAsyncOperation() {
  // Simulate an error (replace with your actual async operation)
  throw new Error('Something went wrong in async operation');
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});