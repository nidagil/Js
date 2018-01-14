// test library

var expect = require('chai').expect;
var movies = require('./index');

describe('learntocodejs', function () {
    // Testing all (from API that all & randon need to validate)
    describe('all', function(){
        it('should be an array of string', function() {
          expect(movies.all).to.satisfy(isArrayOfStrings);

          function isArrayOfStrings(array){
              return array.every(function(item){
                return typeof item === 'string';
              });
          }
        });
        it('should contain `Avatar`', function(){
            expect(movies.all).to.include('Avatar');
        });
    });

    //Testing random 
    describe('random', function(){
        it('should return a random item from the movies.all', function(){
            var randomItem = movies.random();
            expect(movies.all).to.include(randomItem);
            //expect(movies.all).to.not.include(randomItem);
        });
        it('should return an array of random movies if passed a number', function(){
            var randomItems = movies.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item){
                expect(movies.all).to.include(item);
            });
        });
    });
});

