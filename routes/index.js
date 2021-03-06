var express = require('express');
var router = express.Router();

var Article = require('../models/article.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  Article.getArticles(function (err, articles) {
    console.log('articles', articles);
    if (err) {
      res.send(err);
    } else {
      res.render('index', {
        title: 'Express',
        articles: articles
      })
    }
  });
});

module.exports = router;
