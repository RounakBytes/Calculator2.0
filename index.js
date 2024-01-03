const add = (x, y) => {
  return x + y;
};

const substract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};
const divide = (x, y) => {

    if (y === 0) {
        console.log('Cannot divide by zero');
        return;
    }

    return x / y;
};

const square = (x) => {
    return x * x;
  };
  

console.log(add(5, 10));
console.log(substract(10, 5));
console.log(multiply(5, 25));
console.log(add(5, 10));
console.log(divide(5, 10));
