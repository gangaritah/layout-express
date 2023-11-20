const express = require('express');
const productController = require('../controllers/product-controller');
const jwtValidator = require('../middleware/auth-token');
const router = express.Router();


router.get('/', jwtValidator.njwtAuth, productController.getProducts);


module.exports = router; 