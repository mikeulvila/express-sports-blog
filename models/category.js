var mongoose = require('mongoose');

// mongoose schema
var categorySchema = mongoose.Schema({
  title: {
    type: 'String'
  },
  description: {
    type: 'String'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

// Get categories function
module.exports.getCategories = function (callback, limit) {
  Category.find(callback).limit(limit).sort({title: 1});
}

//add category
module.exports.addCategory = function (category, callback) {
  // mongoose method .create
  Category.create(category, callback);
}

// Get single category function
module.exports.getCategoryById = function (id, callback) {
  // mongoose method .findById
  Category.findById(id, callback);
}

//update category
module.exports.updateCategory = function (query, update, options, callback) {
  // mongoose method .findOneAndUpdate
  Category.findOneAndUpdate(query, update, options, callback);
}
