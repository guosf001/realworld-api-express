const express = require('express');
const articleCtrl = require('../controller/article');

const router = express.Router();

//文章列表
router.get('', articleCtrl.articlesList);

// 创建文章
router.post('', articleCtrl.createArticle);

//获取用户关注的做着文章列表
router.get('/feed', articleCtrl.feedArticle);

//获取文章
router.get('/:slug', articleCtrl.getArticle);

//更新文章
router.put('/:slug', articleCtrl.updateArticle);

//删除文章
router.delete('/:slug', articleCtrl.deleteArticle);

//为文章添加评论
router.post('/:slug/comments', articleCtrl.addComments);

//从文章中获取评论
router.get('/:slug/comments', articleCtrl.getComments);

//删除评论
router.delete('/:slug/comments/:id', articleCtrl.deleteComments);

//最喜欢的文章
router.post('/:slug/favorite', articleCtrl.favoriteArticle);

//不喜欢的文章
router.delete('/:slug/favorite', articleCtrl.unFavoriteArticle);

module.exports = router;
