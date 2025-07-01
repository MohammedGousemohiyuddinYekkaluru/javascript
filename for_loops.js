//for loop
//Adding first n natural numbers
let sum = 0;
let n = Number(prompt("Enter the value of n"));
for(let i = 0; i < n; i++){
    sum += (i+1);
}
console.log(sum);

//factorial by using for loop

let fact = 1;
let num = 5;
for(let i = 1; i <= num; i++){
    fact *= i;
}
console.log(fact);

// for-in loop

let marks = {
    Gouse: 90,
    Nizam: 80,
    saniya: 70
}
for(let i in marks){
    console.log(" Marks of " + a + " are " + marks[a]);
}

//for-of loop
let fname = "gouse"
for(let b of fname){
    console.log(b); // for-of only works with iterables
}