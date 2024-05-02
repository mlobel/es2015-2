/* function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
} 
TURN INTO ES2015 WITH TWO ARROW FUNCTIONS, TURN INTO A ONE LINER */

const double = (arr) => arr.map((val) => val * 2);

/*Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)

*/

const squareAndFindEvens = (numbers) => {
  const squares = numbers.map((num) => num ** 2);
  const evens = squares.filter((square) => square % 2 === 0);
  return evens;
};
