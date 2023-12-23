const express = require('express');

const userController = require('../controllers/user-controller');
const authenticateMiddleware = require('../middlewares/authenticate');

const router = express.Router();

router.get('/:userId', authenticateMiddleware, userController.getUserById);

module.exports = router;
