const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const productmiddleware=require('../Middleware/validateId.middleware')


router.get('/', productController.getAllProducts);
router.post('/Addproducts', productmiddleware.validateProductData,productController.addProduct);

module.exports = router;
