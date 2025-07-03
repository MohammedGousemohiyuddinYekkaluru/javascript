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

