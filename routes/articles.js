var express = require('express');
var router = express.Router();

var Article = require('../models/article.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  Article.getArticles(function (err, articles) {
    if (err) {
      res.send(err);
    } else {
      res.render('articles', {
        title: 'All Articles',
        articles: articles
      })
    }
  });
});

router.get('/show/:id', function(req, res, next) {
  Article.getArticleById(req.params.id, function (err, article) {
    if (err) {
      res.send(err);
    } else {
      res.render('article', {
        article: article
      });
    }
  });
});

router.get('/category/:category_id', function(req, res, next) {
  res.render('articles');
});

// add article
router.post('/add', function (req, res) {
  // express validator
  req.checkBody('title', 'Title is required').notEmpty();
  req.checkBody('author', 'Author is required').notEmpty();
  req.checkBody('category', 'Category is required').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    Category.getCategories(function (err, categories) {
      res.render('add_article', {
        title: 'Add Article',
        errors: errors,
        categories: categories
      });
    });
  } else {
    var article = new Article();
    article.title = req.body.title;
    article.subtitle = req.body.subtitle;
    article.category = req.body.category;
    article.body = req.body.body;
    article.author = req.body.author;
    // call add article function
    Article.addArticle(article, function (err, article) {
      if (err) {
      res.send(err);
      } else {
        req.flash('sucess', 'Article Saved');
        res.redirect('/manage/articles');
      }
    });
  }
});


module.exports = router;
