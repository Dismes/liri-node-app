var Twitter = require('twitter');

var twitterKeys = new Twitter( {
  consumer_key: 'MBCeuHKAM6RahYccrlTYQj8Lo',
  consumer_secret: 'jd6JHa1ATXnVcu5gi9jAHJvyGyPJIxxkHp6m7jOiHOUdApFteP',
  access_token_key: '924369119889145856-8HeqsA48bJwkUwfUxYcgitvBjZD7tZp',
  access_token_secret: 'B07lgB9tU4rD6zU59YCfrrIPkjkGddDuobYx8R4upYqkq',
});

module.exports = twitterKeys;

var start = function () {
    var input = process.argv.splice(2);
    switch (input[0]) {
        case 'my-tweets':
            myTweets();
            break;
        case 'spotify-this-song':
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
            var value = i+1;
            console.log('tweet #' + value  + ': ' + tweets[i].text);
        }

    });
};

var spotifyThisSong = function () {

};

var movieThis = function () {

};

var doWhatItSays = function () {

};


start();