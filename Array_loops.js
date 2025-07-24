let num = [1,2,3,4,5,6];

//For loop

for(let i=0; i<num.length; i++){
    console.log(num[i]);
}

//ForEach loop

num.forEach((elem)=>{
    console.log(elem*elem);
})

//Array.From

let Name = "gouse";
let arr = Array.from(Name); //used to create an array from any other object.
console.log(arr);

//For...of loop :- short form of "for loop".

for(let i of num){
    console.log(i);
}

//for...in :- gives keys/indices of an object/array.

for(let i in num){
    console.log(i);
}