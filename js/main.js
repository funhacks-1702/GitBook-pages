$(document).ready( function(){
  $.getJSON("shelves.json", function(json){
    var bs_count=0;
    json[0].bookshelves.forEach(function(shelf){
      var shelf_id = "shelf" + shelf.shelf_id;
      //bookshelfが複数の可能性があるためループ処理
      $("#bookshelves").loadTemplate(
        "bookshelves.template.html",{
          "shelf_name" : shelf.shelf_name,
          "shelf_owner" : shelf.shelf_owner,
          "created_at" : shelf.created_at,
          "bookshelf_id" : shelf_id
        },
        {append:true}
      );

      console.log(shelf.books);
      //booksの表示のため別テンプレート呼び出し
      shelf.books.forEach(function(book){
        $("#bookshelves[shelf_id].books").loadTemplate(
            "books.template.html",{
              "isbn" : book.isbn,
              "name" : book.name,
              "file_name" : book.file_name,
              "comment" : book.comment
            },
            {append:true}
        );
        //tagsの表示のため別テンプレート呼び出し
        book.tags.forEach(function(tag){
          $("#tags").loadTemplate(
            "tags.template.html",{
              "tag" : tag
            },
            {append:true}
          );
        }); // tags
      });   // books

    });     // bookshelves
  });       // getJSON
});
