//获取用户资料
exports.getProfile = async (req, res, next) => {
  try {
    res.send('post / users/getProfile');
  } catch (error) {
    next(error);
  }
};

//关注用户
exports.followProfile = async (req, res, next) => {
  try {
    res.send('post / users/followProfile');
  } catch (error) {
    next(error);
  }
};

//取消关注用户
exports.unFollowProfile = async (req, res, next) => {
  try {
    res.send('post / users/unFollowProfile');
  } catch (error) {
    next(error);
  }
};
