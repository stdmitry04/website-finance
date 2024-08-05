// backend/models/News.js
const mongoose = require('mongoose');

// Define the News schema
const newsSchema = new mongoose.Schema({
  company: String,
  title: String,
  link: String,
  timestamp: String
}, {
  collection: 'news' // Explicitly specify the collection name
});

// Create the News model
const News = mongoose.model('News', newsSchema);

module.exports = News;
