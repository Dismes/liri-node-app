var start = function () {
    var input = process.argv.splice(2);
    switch (input[0]) {
        case 'my-tweets':
            myTweets();
            break;
        case 'spotify-this-song':
            spotifyThisSong(input[1]);
            break;
        case 'movie-this':
            movieThis(input[1]);
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

    console.log(songName);
    if (songName === undefined) {
        console.log("I see that you didn't search anything, here just for you, I will search my favorite song");
        console.log("node lris.js spotify-this-song 'No Pain, No Game'");
        spotifyThisSongSearch("No Pain, No Game");
    } else {
        spotifyThisSongSearch(songName);

    }


};

var spotifyThisSongSearch = function (song) {
    spotify
        .search({
            type: 'track',
            query: songName
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
}

var movieThis = function (movie) {

    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

    var request = require('request');

    request(queryURL, function (error, response, body) {
        console.log(JSON.parse(body));
        console.log('Title: ' + JSON.parse(body).Title);
        console.log('Year: ' + JSON.parse(body).Year);
        console.log('Rated: ' + JSON.parse(body).Rated);
        console.log('IMDB: ' + JSON.parse(body).Ratings[0].Value);
        console.log('Rotten Tomatoes: ' + JSON.parse(body).Ratings[1].Value);
        console.log('County of production: ' + JSON.parse(body).Country);
        console.log('Language: ' + JSON.parse(body).Language);
        console.log('Plot: ' + JSON.parse(body).Plot);
        console.log('Actos: ' + JSON.parse(body).Actors);
    });

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
