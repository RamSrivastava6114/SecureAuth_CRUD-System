const express = require('express');
const router = express.Router();
const { 
  registerUser, 
  loginUser, 
  getUser, 
  updatePassword, 
  deleteAccount 
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUser);
router.put('/update-password', protect, updatePassword);
router.delete('/delete-account', protect, deleteAccount);

module.exports = router;
