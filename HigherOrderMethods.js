//Map

let arr = [22,33,55];
let a = arr.map((value, index, array) => { //doesnt change the original array
    console.log(value, index, array);
    return value * 2
})

console.log(a);

//Filter

let arr2 = [2,3,5,7,11,13];
let a2 = arr2.filter((value) => {  //doesnt change the original array
    return value < 10;
})

console.log(a2);


//Reduce 

let arr3 = [1,2,3,4,5];
let a3 = arr3.reduce((x1, x2) => { //reduces to one value and doesnt chane the original array
    return x1 * x2;
},1)

console.log(a3); //120