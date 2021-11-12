//文章列表
exports.articlesList = async (req, res, next) => {
  try {
    res.send('post / users/articlesList');
  } catch (error) {
    next(error);
  }
};

//创建文章
exports.createArticle = async (req, res, next) => {
  try {
    res.send('post / users/createArticle');
  } catch (error) {
    next(error);
  }
};

//获取用户关注的做着文章列表
exports.feedArticle = async (req, res, next) => {
  try {
    res.send('post / users/feedArticle');
  } catch (error) {
    next(error);
  }
};

//获取文章
exports.getArticle = async (req, res, next) => {
  try {
    res.send('post / users/getArticle');
  } catch (error) {
    next(error);
  }
};

//更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    res.send('post / users/updateArticle');
  } catch (error) {
    next(error);
  }
};

//删除文章
exports.deleteArticle = async (req, res, next) => {
  try {
    res.send('post / users/deleteArticle');
  } catch (error) {
    next(error);
  }
};

//添加评论
exports.addComments = async (req, res, next) => {
  try {
    res.send('post / users/addComments');
  } catch (error) {
    next(error);
  }
};

//获取评论
exports.getComments = async (req, res, next) => {
  try {
    res.send('post / users/getComments');
  } catch (error) {
    next(error);
  }
};

//删除评论
exports.deleteComments = async (req, res, next) => {
  try {
    res.send('post / users/deleteComments');
  } catch (error) {
    next(error);
  }
};

//喜爱的文章
exports.favoriteArticle = async (req, res, next) => {
  try {
    res.send('post / users/favoriteArticle');
  } catch (error) {
    next(error);
  }
};

//不喜爱的文章
exports.unFavoriteArticle = async (req, res, next) => {
  try {
    res.send('post / users/unFavorite');
  } catch (error) {
    next(error);
  }
};
