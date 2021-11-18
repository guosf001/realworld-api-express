const { User } = require('../model');
const jwt = require('../utils/jwt');
const { jwtSecret } = require('../config/config.default');

// 用户注册
exports.register = async (req, res, next) => {
  try {
    // 1.获取请求数据
    // 2.数据验证
    // 3.验证通过，将数据保存在数据库
    const user = new User(req.body.user);
    await user.save();
    user.toJSON(); // 转为普通json 并且删掉password
    delete user.password;
    // 4.发送成功响应
    res.status(201).json({
      user,
    });
  } catch (error) {
    next(error);
  }
};

// 用户登录
exports.login = async (req, res, next) => {
  try {
    // 1、数据验证
    // 2、生成token
    // 3、发送成功响应（包含token的用户信息）
    const user = req.user.toJSON();
    delete user.password;
    const token = await jwt.sign({ userId: user._id }, jwtSecret, {
      expiresIn: 60 * 60 * 24, // 过期时间
    });
    res.status(200).json({
      ...user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

// 获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    console.log(111, req.headers);
    res.send('post / users/getCurrentUser');
  } catch (error) {
    next(error);
  }
};

// 更新当前登录用户
exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send('post / users/updateCurrentUser');
  } catch (error) {
    next(error);
  }
};
