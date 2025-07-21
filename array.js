let class_marks = [91, 92, 61, 62, false, null];//collection of items,can hold more than one value and one datatype.
console.log(class_marks);
console.log(class_marks[0]);
console.log(class_marks[1]);
class_marks[6] = 88; //adding a new value //arrays are mutable.
class_marks[1] = 78; //changing the value of 1st index.
console.log(class_marks); 
console.log(`The length of class_marks is ${class_marks.length}`);
console.log(typeof(class_marks)); //object.

//Quick quiz

for(i=0; i<class_marks.length; i++){
    console.log(class_marks[i]);
}