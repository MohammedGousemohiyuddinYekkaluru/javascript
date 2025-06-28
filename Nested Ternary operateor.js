let a = 4;
let b = 6;
let c = 8;

// Finding the greatest using nested ternary operator

let greater = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

console.log(greater); // Output: 8

// Finding the smallest using nested ternary operator

let smaller = (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);

console.log(smaller); // Output: 4

