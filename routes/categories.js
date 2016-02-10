var express = require('express');
var router = express.Router();

// bring in category.js model
Category = require('../models/Category.js');

router.get('/', function(req, res, next) {
  Category.getCategories(function (err, categories) {
    if (err) {
      res.send(err);
    } else {
      res.render('categories', {
        title: 'Categories',
        categories: categories
      });
    }
  })
});

module.exports = router;
