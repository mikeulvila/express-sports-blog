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

router.post('/add', function (req, res) {
  // express validator
  req.checkBody('title', 'Title is required').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    res.render('add_category', {
      title: 'Add Category',
      errors: errors
    });
  } else {
    res.send('PASSED');
  }
})
module.exports = router;
