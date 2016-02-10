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

// add category
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
    var category = new Category();
    category.title = req.body.title;
    category.description = req.body.description;
    // call add category function
    Category.addCategory(category, function (err, category) {
      if (err) {
      res.send(err);
      } else {
        req.flash('sucess', 'Category Saved');
        res.redirect('/manage/categories');
      }
    });
  }
});

//edit category
router.post('/edit/:id', function (req, res) {
  // express validator
  req.checkBody('title', 'Title is required').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    res.render('edit_category', {
      title: 'Edit Category',
      errors: errors
    });
  } else {
    var category = new Category();
    var query = {_id: [req.params.id]};
    var update = {title: req.body.title, description: req.body.description}

    // call add category function
    Category.updateCategory(query, update, {}, function (err, category) {
      if (err) {
      res.send(err);
      } else {
        req.flash('sucess', 'Category Updated');
        res.redirect('/manage/categories');
      }
    });
  }
});

//delete category
router.delete('/delete/:id', function (req, res) {
  var query = {_id: [req.params.id]};
  Category.remove(query, function (err) {
    if (err) {
      res.send(err);
    } else {
      res.status(204).send();
    }
  });

});


module.exports = router;
