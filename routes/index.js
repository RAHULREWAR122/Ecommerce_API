const express = require('express')
const apiController = require('../controllers/apiController')
const router = express.Router();

// get req to find all products
router.get('/' , apiController.products);

// post request to create new product
router.post('/create' , apiController.createProducts);

// delet request to deleting a specific id of product
router.delete('/:id' , apiController.deleteProduct);

//post request to update product Quentity of a seecific product
router.post('/:id/update_quentity/' , apiController.updateProduct)

module.exports = router;