import uniqueRandomArray from 'unique-random-array';
import movieNames from './data-movie.json';

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