require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const mainRouter = require('./routes/main')
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

app.use(express.json())

app.use('/api/v1',mainRouter);

// Error Handling middleware
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async() => {
  try {
    app.listen(port, () => console.log(`Server listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start()