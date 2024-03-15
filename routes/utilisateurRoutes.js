const express = require('express');
const router = express.Router();
const authController = require('../authentification/authController');
const verifyToken = require('../middleware/verifyToken');

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

router.post('/change-password', verifyToken, authController.changePassword);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword); 
router.put('/update-profile', verifyToken, authController.updateProfile);
router.delete('/delete-account', verifyToken, authController.deleteAccount);

module.exports = router;