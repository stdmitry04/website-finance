const express = require('express');
const axios = require('axios');

const router = express.Router();

const API_KEY = '0CKZGL67UFS5W2K6';

// Get stock data for a company
router.get('/:company', async (req, res) => {
  try {
    const company = req.params.company;
    const response = await axios.get('https://www.alphavantage.co/query', {
      params: {
        function: 'TIME_SERIES_DAILY',
        symbol: company,
        apikey: API_KEY
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
