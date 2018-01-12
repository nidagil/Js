// var uniqueRandomArray = require('unique-random-array');
// var dishNames = require('./db.json');

// module.exports = {
//   all: dishNames,
//   random: uniqueRandomArray([1, 2, 3, 4])
  
// };

var uniqueRandomArray = require('unique-random-array');
var movieNames = require('./data-movie.json');

module.exports = {
    all: movieNames,
    random: uniqueRandomArray(movieNames)

};

