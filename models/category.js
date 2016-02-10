var mongoose = require('mongoose');

// mongoose schema
var categorySchema = mongoose.schema({
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

// Get single category function
