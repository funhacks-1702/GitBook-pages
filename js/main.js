$(function({
  $.getJSON("shelves.json", function(json){
    json.data.forEach(function(shelf){
      //bookshelfが複数の可能性があるためループ処理
      $("#bookshelf").loadTemplate(
        "bookshelves.template.html",{
          "shelf_name" : shelf.shelf_name,
          "shelf_owner" : shelf.shelf_owner,
          "created_at" : shelf.created_at
        }
      );

      //booksの表示のため別テンプレート呼び出し
      json.data.books.forEach(function(book){
        $("#books").loadTemplate(
            "books.template.html",{
              "isbn" : book.isbn,
              "name" : book.name,
              "file_name" : book.file_name,
              "comment" : book.comment
            }
        );
      });

      //tagsの表示のため別テンプレート呼び出し
      json.data.tags.forEach(function(tag){
        $("#tags").loadTemplate(
          "tags.template.html",{
            "tag" : tag
          }
        );
      });

    });
  });
}))
