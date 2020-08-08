
var queryURL = "https://api.yelp.com/v3/businesses/search"

$.ajax({
    url: queryURL,
    method: "GET",
  }).then(function(data) {
    console.log(data);
  })