const express = require('express');

const router = express.Router();

const protect =
require('../middleware/authMiddleware');

const {
  getStores,
  addStore,
  deleteStore
} = require('../controllers/storeController');



router.get(
  '/',
  protect,
  getStores
);



router.post(
  '/',
  protect,
  addStore
);



router.delete(
  '/:id',
  protect,
  deleteStore
);

module.exports = router;