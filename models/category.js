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
// Get single category function
