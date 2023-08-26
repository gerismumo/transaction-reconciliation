const express = require('express');
const router = express.Router();
const {
  gettransactions,
  settransaction,
} = require('../controllers/transactionController');
const { protect } = require('../middleware/authMiddleware');

// Keep this route as it requires authentication to get transactions by user ID
router.route('/').get(protect, gettransactions).post(settransaction);


module.exports = router;
