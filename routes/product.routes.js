const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const productmiddleware=require('../Middleware/validateId.middleware')

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API for managing products
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Successfully retrieved all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: Product ID
 *                   name:
 *                     type: string
 *                     description: Product name
 *                   price:
 *                     type: number
 *                     description: Product price
 *       500:
 *         description: Server error
 */


router.get('/', productController.getAllProducts);
/**
 * @swagger
 * /api/products/Addproducts:
 *   post:
 *     summary: Add a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *                 example: "Product A"
 *               price:
 *                 type: number
 *                 description: Price of the product
 *                 example: 19.99
 *               description:
 *                 type: string
 *                 description: Description of the product
 *                 example: "This is a sample product."
 *     responses:
 *       201:
 *         description: Product successfully added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: "Product added successfully"
 *       400:
 *         description: Bad request (invalid input)
 *       500:
 *         description: Server error
 */

router.post('/Addproducts', productmiddleware.validateProductData,productController.addProduct);

module.exports = router;
