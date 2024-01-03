const divide = (x, y) => {

    if (y === 0) {
        console.log('Cannot divide by zero');
        return;
    }

    return x / y;
};
console.log(divide(5, 10));