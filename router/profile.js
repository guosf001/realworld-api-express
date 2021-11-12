const express = require('express');
const profileCtrl = require('../controller/profile');

const router = express.Router();

//获取用户资料
router.get('/:username', profileCtrl.getProfile);

//关注用户
router.post('/:username/follow', profileCtrl.followProfile);

//取消关注用户
router.delete('/:username/follow', profileCtrl.unFollowProfile);

module.exports = router;
