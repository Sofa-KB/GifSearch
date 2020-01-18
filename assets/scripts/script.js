var input = prompt("What type of gif would you like to search for?")
var gifNumber = prompt("How many would you like to search for?")
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=0aycN4fs7qCEve8DSERNufAG7Mdcs5Ql&q=" + input + "&limit=" + gifNumber;
document.body.style.backgroundColor = 'black';

$.ajax({
  url: queryURL,
  method: "GET"

}).then(function(response) {
  
  response.data.forEach(function(gif){
    
    var url = gif.images.downsized_large.url
    var img = $('<img>')
    
    img.attr('src', url)
    $('#images').append(img)
  })
});

