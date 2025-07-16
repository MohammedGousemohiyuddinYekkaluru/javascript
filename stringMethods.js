let naam = "Gouse";
let naam2 = "Mohammed";
let naam3 = "   Mohiyuddin    "
console.log(naam.lenght); //5 //property
console.log(naam.toUpperCase()); //method 
console.log(naam.toUpperCase()); //method 
console.log(naam.slice(2,4)); //us //4 is not included 
console.log(naam.slice(2)); //use 
console.log(naam.replace("s","$"));//Gou$e
console.log(naam.concat(naam2)); //Gouse Mohammed
console.log(naam3.trim()); //"Mohiyuudin"

//strings are immutable
console.log(naam, naam2, naam3);

//Quick Quiz

let str = "";

for(i=0; i<naam.length; i++){
    console.log(naam[i]);
    str += naam[i];
};

console.log(str);

