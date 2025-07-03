const hello = () => {
    console.log("Hey how are you");
    
}

function onePlusAvg(x,y){
    return 1 + (x + y) / 2;
};

const sum = (p,q) => {
    return p + q;
};
let a = 1;
let b = 2;
let c = 3;

hello();
console.log(onePlusAvg(a,b));
console.log(onePlusAvg(b,c));
console.log(onePlusAvg(a,c));
console.log(sum(9,8));

//Add two numbers
let addTwoNumbers = (num1, num2) => {
    console.log(num1 + num2);
}

let result = addTwoNumbers(3, 7);
console.log(result); //undefined due to no value is returned from the function.

let otherExample = (num3, num4) => {
    let result = num3 + num4;
    console.log("Done");
    return result;
}

let output = otherExample(5,6);
console.log(output);

//

let loginUserMessage = (userName = "something") => { //we also can give default values
    if(userName){
        return `${userName} just logged in`;
    }else{
        console.log("Enter a Username");
        return;
    }
}

console.log(loginUserMessage("Gouse")); //if this is empty default values are considered

