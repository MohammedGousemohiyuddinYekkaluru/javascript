let a = prompt("what is your age");
a = Number.parseInt(a); //converts the string into number
if(a<0){
    alert("This is the invalid age");
}
else if (a<9){
    alert("You are a kid and you cannot even think of driving");
}
else if (a<18 && a>=9){
    alert("You are a teen and you can think of driving after 18");
}
else{
    alert("You can drive now as you are above 18");
};
//switch case

const fruits = "Mangoes";
switch(fruits){
    case "banana":
        console.log("Dozen 50 rupees");
        break;
    case "Mangoes":
        console.log("3kgs 100 rupees");
        break;
    default:
        console.log("Invalid fruits");
}


 