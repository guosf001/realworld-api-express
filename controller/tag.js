//获取标签
exports.getTags = async (req, res, next) => {
  try {
    res.send('post / users/getTags');
  } catch (error) {
    next(error);
  }
};
