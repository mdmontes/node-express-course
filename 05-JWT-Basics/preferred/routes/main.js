const express = require('express');
const router = express.Router();

const { logon, hello } = require('../controllers/main')
const autheticateToken = require('../middleware/auth')

router.route('/hello').get(autheticateToken,hello)
router.route('/logon').post(logon)

module.exports = router