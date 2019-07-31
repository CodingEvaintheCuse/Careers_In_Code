var responsePromise = fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=vJEWoC18lz9WRzhdi6D3oII0yY1U9E10', {
    "method": "GET",
    "header":{"authorization":"jedk7sTGrmk4MvwEuCvJXNFNzYhaAW2I"},
    data:"",
});

responsePromise.then(function(response) {
  //console.log(response.status);
  response.text().then(function (text) {
    console.log(text);
    var data = JSON.parse(text);
    console.log(data)

    console.log(data.results.books) 

  var arrayofbooks = [];
  arrayofbooks = data.results.books;
  arrayofbooks.forEach(function(book){
    console.log(book.title)  
  var info = document.createElement('p');
    info.innerHTML = book.title + " " + book.author
    
  var image = document.createElement('img')
    image.setAttribute("src", book.book_image);
    info.appendChild(image);
    document.body.appendChild(info);
    
  });
  console.log(book.title)



  
});
  });
//});


