// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const newsRouter = require('./routes/news');
const stocksRouter = require('./routes/stocks');

// Initialize Express app
const app = express();

// Middleware
app.use('/api/stocks', stocksRouter);
app.use('/api/news', newsRouter);
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:0403@finance.ldzhbk5.mongodb.net/?retryWrites=true&w=majority&appName=scraper', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Successfully connected to MongoDB Atlas');
}).catch(err => {
  console.error('Error connecting to MongoDB Atlas', err);
});

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
