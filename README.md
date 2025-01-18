# Unhandled Promise Rejections in Express.js Async Middleware

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within asynchronous middleware.  Errors thrown inside `async` functions are not automatically caught, leading to silent failures unless explicitly handled.

## Problem

The `bug.js` file showcases an Express.js app with an asynchronous route handler.  An error is intentionally thrown within the `someAsyncOperation` function.  Without proper error handling, this error will be silently swallowed, making debugging challenging.

## Solution

The `bugSolution.js` file provides a corrected version. The `catch` block in the route handler now explicitly catches and handles the error, sending an appropriate error response to the client and logging the error for debugging purposes.

## How to Run

1. Clone the repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to see the unhandled rejection.
5. Run `node bugSolution.js` to see the corrected version that handles the error.