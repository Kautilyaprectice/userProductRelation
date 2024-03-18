const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const userController = require('../controllers/user');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

router.get('/user',userController.getAddUser);
router.post('/user/add-user',userController.PostAddUser);
router.delete(`/user/delete-user/:id`,userController.Deleteuser);

module.exports = router;
