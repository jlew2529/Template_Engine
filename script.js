//Yelp API
var apikey="U9BQ06dXBkGJNUv3zRSOQ5d6X7xg3MNHfTU7lT67-gkmbhPJaxXtRQTnjqPPsoC7YDKLLjs1dymCfXGUdEp5N9Kn97bH9zpqkTE180jdxgVruxv2AV94AbsKUR4zX3Yx"
var clientID="vUaKKoVHSe-3_ow_x9Y19A"
var queryURL = "https://api.yelp.com/v3/businesses/search"
var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&location=60657";
$.ajax({
   url: myurl,
   headers: {
    'Authorization':'Bearer U9BQ06dXBkGJNUv3zRSOQ5d6X7xg3MNHfTU7lT67-gkmbhPJaxXtRQTnjqPPsoC7YDKLLjs1dymCfXGUdEp5N9Kn97bH9zpqkTE180jdxgVruxv2AV94AbsKUR4zX3Yx',
},
   method: 'GET',
   dataType: 'json',
   success: function(data){
       console.log('success: '+data);
       console.log(data)
   }
});      