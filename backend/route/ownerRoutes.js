const express = require('express');

const router = express.Router();

const protect =
require('../middleware/authMiddleware');

const {
  getOwnerDashboard
} = require('../controllers/ownerController');

router.get(
  '/dashboard',
  protect,
  getOwnerDashboard
);

module.exports = router;