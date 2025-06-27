//Arithmetic Operators
let a = 10;
let b = 5;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a ** b =", a ** b);
console.log("a % b =", a % b);
console.log("++a", ++a); //11
console.log("a++ =", a++); //11 (12)
console.log("--a", --a); //11
console.log("a =", a); //11
console.log("a-- =", a--); //11 (10)
console.log("a =", a); //10

//Assignment Operators

a += 5; //a = a+5 //10+5 = 15
a -= 5;
a *= 5;
a /= 5;
a **= 1;
a %= 5;
console.log(a);


//Comparison Operators

let comp1 = 6;
let comp2 = 7;
let comp3 = "6"
console.log("comp1 == comp2 is",comp1 == comp2); //false
console.log("comp1 != comp2 is",comp1 != comp2); //true
console.log("comp1 == comp3 is",comp1 == comp3); //true 
console.log("comp1 === comp2 is",comp1 === comp3); //false (strict operator - checks type also)

//Logical Operators

let x = 5;
let y = 6;
console.log(x<y && x === 5); //both conditions true = true
console.log(x<y || x === 5); //atleast one condition true = true
console.log(!false); //true
console.log(!true); //false

