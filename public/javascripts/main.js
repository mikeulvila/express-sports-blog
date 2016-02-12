$(document).ready(function () {

  // AJAX request to delete category
  $('.category-delete').click(function (event) {
    $target = $(event.target);
    $.ajax({
      type: 'DELETE',
      url: '/categories/delete/' + $target.attr('data-category-id'),
      data: {
        _csrf: $target.attr('data-csrf')
      },
      success: function (response) {
        $target.parent().parent().remove();
        alert('Category Removed');
        window.location.href = '/manage/categories';
      },
      error: function (error) {
        alert(error);
        console.log(error);
      }
    });
  });

  // AJAX request to delete article
  $('.article-delete').click(function (event) {
    $target = $(event.target);
    $.ajax({
      type: 'DELETE',
      url: '/articles/delete/' + $target.attr('data-article-id'),
      data: {
        _csrf: $target.attr('data-csrf')
      },
      success: function (response) {
        $target.parent().parent().remove();
        alert('Article Removed');
        window.location.href = '/manage/articles';
      },
      error: function (error) {
        alert('Error: ' + error);
        console.log('Error: ' + error);
      }
    });
  });


});
