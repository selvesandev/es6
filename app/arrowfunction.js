let arrowFunction = () => {
    console.log('Arrow Function');
};
setTimeout(arrowFunction, 3000);


let values = [20, 30, 40];
//double each value in the array
let doubled = values.map((n) => n * 2);
console.log(doubled);


let points = [7, 16, 21, 40, 2, 67, 5];
let highScore = points.filter((n) => n > 15);
console.log(highScore);


const addToCart = (item, number) => {
    return Number.isSafeInteger(number);
};

console.log(addToCart('shirt', Math.pow(2, 54)));//true
console.log(addToCart('shirt', Infinity));//false