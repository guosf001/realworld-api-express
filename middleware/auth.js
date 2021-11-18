// 身份认证中间件
const { verify } = require('../utils/jwt');
const { jwtSecret } = require('../config/config.default');
const { User } = require('../model');

module.exports = async (req, res, next) => {
  // 从请求头获取token 数据
  // 验证token 是否有效
  // 无效 响应401状态码
  // 有效，把用户信息读取出来挂载到req请求对象上
  // 继续往后执行
  let token = req.headers.authorization;

  token = token ? token.split('Bearer ')[1] : null;
  if (!token) {
    return res.status(401).end();
  }
  try {
    const decodedToken = await verify(token, jwtSecret);
    req.user = await User.findById(decodedToken.userId);
    next();
  } catch (error) {
    return res.status(401).end();
  }
};
