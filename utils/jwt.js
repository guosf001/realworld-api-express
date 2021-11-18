const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.sign = promisify(jwt.sign); // 生成jwt

exports.verify = promisify(jwt.verify); // 验证jwt;

exports.decode = promisify(jwt.decode);
