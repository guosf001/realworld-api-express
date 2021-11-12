const express = require('express');
const tagCtrl = require('../controller/tag');
const router = express.Router();

router.get('', tagCtrl.getTags);

module.exports = router;
