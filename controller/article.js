const { Article, User } = require('../model/index');
// 文章列表
exports.articlesList = async (req, res, next) => {
  try {
    const { limit = 20, offset = 0, tag, author } = req.query;
    const filter = {};
    if (tag) {
      filter.tagList = tag;
    }

    if (author) {
      const user = await User.findOne({ username: author });
      filter.author = user ? user._id : null;
    }

    const articles = await Article.find(filter)
      .skip(Number(offset)) // 跳过多少条
      .limit(Number(limit)) // 取多少条
      .sort({ createdAt: -1 }); // -1 倒叙， 1 正序
    const articlesCount = await Article.countDocuments();
    res.status(200).json({
      articles,
      articlesCount,
    });
  } catch (error) {
    next(error);
  }
};

// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body.article);
    article.author = req.user._id;
    article.populate('author');
    await article.save();
    res.status(201).json({
      article,
    });
  } catch (error) {
    next(error);
  }
};

// 获取用户关注的做着文章列表
exports.feedArticle = async (req, res, next) => {
  try {
    res.send('post / users/feedArticle');
  } catch (error) {
    next(error);
  }
};

// 获取文章
exports.getArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.articleId);
    article.populate('author');
    if (!article) {
      return res.status(404).end();
    }
    res.status(200).json({
      article,
    });
  } catch (error) {
    next(error);
  }
};

// 更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    const { article } = req;
    const bodyArticle = req.body.article;
    article.title = bodyArticle.title || article.title;
    article.description = bodyArticle.description || article.description;
    article.body = bodyArticle.body || article.body;
    await article.save();
    res.status(200).json({
      article,
    });
  } catch (error) {
    next(error);
  }
};

// 删除文章
exports.deleteArticle = async (req, res, next) => {
  try {
    const { article } = req;
    await article.remove();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

// 添加评论
exports.addComments = async (req, res, next) => {
  try {
    res.send('post / users/addComments');
  } catch (error) {
    next(error);
  }
};

// 获取评论
exports.getComments = async (req, res, next) => {
  try {
    res.send('post / users/getComments');
  } catch (error) {
    next(error);
  }
};

// 删除评论
exports.deleteComments = async (req, res, next) => {
  try {
    res.send('post / users/deleteComments');
  } catch (error) {
    next(error);
  }
};

// 喜爱的文章
exports.favoriteArticle = async (req, res, next) => {
  try {
    res.send('post / users/favoriteArticle');
  } catch (error) {
    next(error);
  }
};

// 不喜爱的文章
exports.unFavoriteArticle = async (req, res, next) => {
  try {
    res.send('post / users/unFavorite');
  } catch (error) {
    next(error);
  }
};
