var mongoose = require('mongoose');

// mongoose schema
var articleSchema = mongoose.Schema({
  title: String,
  subtitle: String,
  category: String,
  body: String,
  author: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  comments: [{
    comment_subject: String,
    comment_body: String,
    comment_author: String,
    comment_email: String,
    comment_date: String
  }]
});

var Article = module.exports = mongoose.model('Article', articleSchema);

// Get articles function
module.exports.getArticles = function (query, callback, limit) {
  Article.find(query, callback).limit(limit).sort({title: 1});
}

//add article
module.exports.addArticle = function (article, callback) {
  // mongoose method .create
  Article.create(article, callback);
}

// Get single article function
module.exports.getArticleById = function (id, callback) {
  // mongoose method .findById
  Article.findById(id, callback);
}

//update article
module.exports.updateArticle = function (query, update, options, callback) {
  // mongoose method .findOneAndUpdate
  Article.findOneAndUpdate(query, update, options, callback);
}

//ADD COMMENT
module.exports.addComment = function (query, comment, callback) {
  // mongoose method .findOneAndUpdate
  Article.update(query,
      { $push: {
          'comments': comment
        }
      }, callback);
}


