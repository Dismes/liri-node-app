var start = function () {
    var input = process.argv.splice(2);
    switch (input[0]) {
        case 'my-tweets':
            myTweets();
            break;
        case 'spotify-this-song':
            spotifyThisSong();
            break;
        case 'movie-this':
            break;
        case 'do-what-it-says':
            break;
        default:
            console.log("Please input a input");
            break;
    };


};

var myTweets = function () {
    //ttn33727@sqoai.com
    twitterKeys.get('statuses/user_timeline', function (error, tweets, response) {
        if (error) throw error;
        for (var i = 0; i < 20; i++) {
            var value = i + 1;
            console.log('tweet #' + value + ': ' + tweets[i].text);
        }

    });
};

var spotifyThisSong = function (songName) {

    spotify
        .search({
            type: 'track',
            query: 'All the Small Things'
        })
        .then(function (response) {
            console.log(response.tracks.items[0]);
            console.log("Name: " + response.tracks.items[0].name);
            console.log("Artitsts: " + response.tracks.items[0].artists.name);
            console.log("Album: " + response.tracks.items[0].album.name);
            console.log("Preview :" + response.tracks.items[0].preview_url)
        })
        .catch(function (err) {
            console.log(err);
        });


};

var movieThis = function () {

};

var doWhatItSays = function () {

};
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: '37d4ae171f6e463f8aa335db533f583b',
    secret: 'c673d99314f847f285d02d0a81baeb38'
});


var Twitter = require('twitter');

var twitterKeys = new Twitter( {
  consumer_key: 'MBCeuHKAM6RahYccrlTYQj8Lo',
  consumer_secret: 'jd6JHa1ATXnVcu5gi9jAHJvyGyPJIxxkHp6m7jOiHOUdApFteP',
  access_token_key: '924369119889145856-8HeqsA48bJwkUwfUxYcgitvBjZD7tZp',
  access_token_secret: 'B07lgB9tU4rD6zU59YCfrrIPkjkGddDuobYx8R4upYqkq',
});

module.exports = twitterKeys;

start();