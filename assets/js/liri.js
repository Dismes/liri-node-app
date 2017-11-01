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