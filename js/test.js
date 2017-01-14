$(document).ready( function(){
  $.getJSON("shelves.json", function(json){
    json[0].bookshelves[0].books.forEach(function(book){
        console.log(book.file_name);
        $("#bookshelf").loadTemplate(
            "books.template.html",{
              "name" : book.name,
              "file_name" : book.file_name,
              "isbn" : book.isbn,
              "comment" : book.comment
            },
            {append:true}
          );
    });   // books
    });     // bookshelves
  });       // getJSON

$(".books").popbar();
