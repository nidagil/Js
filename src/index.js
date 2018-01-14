// var uniqueRandomArray = require('unique-random-array');
// var movieNames = require('./data-movie.json');

// module.exports = {
//     all: movieNames,
//     random: uniqueRandomArray(movieNames)
// };

//You can write your own functions or using third party library.

var uniqueRandomArray = require('unique-random-array');
var movieNames = require('./data-movie.json');
var getRandomMovie = uniqueRandomArray(movieNames);

module.exports = {
    all: movieNames,
    random: random
};

function random(number) {
   if (number === undefined) {
       return getRandomMovie();
   } else {
       var randomMovies = [];
       for (var i = 0; i < number; i++) {
           randomMovies.push(getRandomMovie());
       }
       return randomMovies;
   }
}