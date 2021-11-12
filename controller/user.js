//用户注册
exports.register = async (req, res, next) => {
  try {
    //1.获取请求数据
    console.log(`req`, req.body);
    //2.数据验证
    //3.验证通过，将数据保存在数据库
    //4.发送成功响应
    res.send('post / users/register');
  } catch (error) {
    next(error);
  }
};

//用户登录
exports.login = async (req, res, next) => {
  try {
    res.send('post / users/login');
  } catch (error) {
    next(error);
  }
};

//获取当前登录用户
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.send('post / users/getCurrentUser');
  } catch (error) {
    next(error);
  }
};

//更新当前登录用户
exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send('post / users/updateCurrentUser');
  } catch (error) {
    next(error);
  }
};
