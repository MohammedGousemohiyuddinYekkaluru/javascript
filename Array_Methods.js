 let arr = [1,2,3,4];
 let b = arr.toString(); //b is now a string
 console.log(b);
 let c = arr.join(" and ") 
 console.log(c,typeof c); //string
//  let d = arr.pop(); //deletes last value in the array.
//  console.log(d); //4 :- gives the deleted value.
//  console.log(arr);
//  let e = arr.push(5); //push returns new array length
//  console.log(arr,arr.length);

// let f = arr.shift();//removes first value in the array.
// console.log(arr);
let g = arr.unshift(0); //adds new value to the beggining of the array.
console.log(arr);

//array methods 2
let num = [1,2,3,4,5,6,7,8,9];
// delete num[0]; //operator
// console.log(num,num.length); //10 //doesn't change the length.
let num2 = [10,11,12];
let num3 =[13,14,15];
// let newarr = num.concat(num2,num3);
// console.log(newarr);

//sort method

let compare = (a,b) => {
    return a - b //ascending order
    b-a //descending order
}
let sortNum = [22,6,33,99,65];
sortNum.sort(compare) //changes original array
console.log(sortNum);

//splice and slice

let spliceArr = [22,6,33,99,65];
let deletedValues = spliceArr.splice(1,1,55,65);
console.log(spliceArr); //changes original array
console.log(deletedValues); //returns deleted values.


let sliceArr = [22,6,33,99,65];
let newsliceArr = sliceArr.slice(0,4); //returns new array.
console.log(newsliceArr);






 
 

 