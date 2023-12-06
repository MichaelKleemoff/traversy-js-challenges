const numbers = [1, 2, 3, 4, 5];
const tempsFahrenheit = [-15, 32, 48, 75, 102];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const fahrenheitToCelsius = tempsFahrenheit.map((tempFahren) =>
	parseInt((5 / 9) * (tempFahren - 32))
);

console.log('Temps in Celsius: ', fahrenheitToCelsius);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log('Odd numbers: ', oddNumbers);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const sumPlusOrigin = numbers.reduce((acc, cur) => acc + cur, 10);
console.log(('Origin plus each number: ', sumPlusOrigin));

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((num) => console.log(num * num));

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const firstEvenNum = numbers.find((num) => num % 2 === 0);
console.log('First even number: ', firstEvenNum);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const squareRoot25 = numbers.some((num) => num === Math.sqrt(25));
console.log('Any number is a square root of 25: ', squareRoot25);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const allElementsNums = numbers.every((num) => typeof num === 'number');
console.log('All elements are numbers: ', allElementsNums);
