const express = require('express');
const articleCtrl = require('../controller/article');
const auth = require('../middleware/auth');
const articleValidator = require('../validator/article');

const router = express.Router();

// 文章列表
router.get('', articleCtrl.articlesList);

// 创建文章
router.post('', auth, articleValidator.createArticle, articleCtrl.createArticle);

// 获取用户关注的做着文章列表
router.get('/feed', articleCtrl.feedArticle);

// 获取文章
router.get('/:articleId', articleValidator.getArticle, articleCtrl.getArticle);

// 更新文章
router.put('/:articleId', auth, articleValidator.updateArticle, articleCtrl.updateArticle);

// 删除文章
router.delete('/:articleId', auth, articleValidator.deleteArticle, articleCtrl.deleteArticle);

// 为文章添加评论
router.post('/:articleId/comments', articleCtrl.addComments);

// 从文章中获取评论
router.get('/:articleId/comments', articleCtrl.getComments);

// 删除评论
router.delete('/:articleId/comments/:id', articleCtrl.deleteComments);

// 最喜欢的文章
router.post('/:articleId/favorite', articleCtrl.favoriteArticle);

// 不喜欢的文章
router.delete('/:articleId/favorite', articleCtrl.unFavoriteArticle);

module.exports = router;
