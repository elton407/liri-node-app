// var request = require('request');
// var movieName = process.argv[2];
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&apikey=40e9cece";



// var options = {
//   url: queryUrl
// };

// function callback(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     var info = JSON.parse(body);
//     console.log("Title: " + info.Title);
//     console.log("Release Year: " + info.Year);
//     console.log("IMDB Rating: " + info.imdbRating);
//     console.log("Rotten Tomatoes Rating: " + info.imdbRating);
//     console.log("Country: " + info.Country);
//     console.log("Language: " + info.Language);
//     console.log("Plot: x" + info.Plot);
//     console.log('hello');
//     //console.log(info.forks_count + " Forks");
//   }
// }

// request(options, callback);

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'i4Z4tHPtLNaPP4PJrK8cE6jej',
  consumer_secret: '9LJIkhffhEC5Y3UGE2y2nQ2FLV0iOco8yDyXmnuBbEg63D82wi',
  access_token_key: '885184268770709505-U4emYfMeJN7kO0BqUYkcqBVHmtlguix',
  access_token_secret: 'IVpWnxYOV4ONBn0RcXZlAVYLd3kwH1QYMojdig3joi9Ew'
});

var params = {screen_name: 'EFRED321'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	for (var i = 0; i < tweets.length; i++) {
  		tweet = tweets[i]['text'];
  		tTime = tweets[i]['created_at'];
  		tUser = tweets[i].user['name'];
  		console.log('_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ')
  		console.log(tUser);
  		console.log(tTime);
  		console.log(tweet);
  	}
    
  }
});
// console.log('this is loaded');

// exports.twitterKeys = {
//   consumer_key: 'i4Z4tHPtLNaPP4PJrK8cE6jej',
//   consumer_secret: '9LJIkhffhEC5Y3UGE2y2nQ2FLV0iOco8yDyXmnuBbEg63D82wi',
//   access_token_key: '885184268770709505-U4emYfMeJN7kO0BqUYkcqBVHmtlguix',
//   access_token_secret: 'IVpWnxYOV4ONBn0RcXZlAVYLd3kwH1QYMojdig3joi9Ew',
// }
