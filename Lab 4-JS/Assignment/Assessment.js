// PART B - Assessment

// Question 1
console.log("\nQuestion 1:\n");
let i=0;
while(i<=100){
if(i%2!=0)
    console.log(i);
i++;
}


// Question 2
console.log("\nQuestion 2:\n");
for (let i=0;i<=100;i++) {
    if(i%2!=0)
        console.log(i);
}


//  Question 3
console.log("\nQuestion 3:\n");
let cars = ["Saab", "Volvo", "BMW"];
//  Part 1
cars.push("Toyota");
//  Part 2
cars.unshift("Mercedes");
// Part 3
function displayArray(a) {
for (let num of a)
    console.log(num);
}
displayArray(cars);
// Part 4
console.log(cars.sort());


// Question 4
console.log("\nQuestion 4:\n");
function avgArray(){
    let numbers=[5,67,4,3,5,45,6,7,8,3,2,67,8,2,99,7,5,3,23,4,5,6,];
    let avg=numbers.reduce((accumlaor, current)=> accumlaor+current)/numbers.length;
    return avg;
}

// //To Test Question4
// let b = avgArray();
// console.log(b);



//Question 5
console.log("\nQuestion 5:\n");
function dayOfWeek(a) {
    switch(a) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            console.error("Invalid Number");

    }

}
// To test Question 5
console.log(dayOfWeek(4));


//  Question 6
console.log("\nQuestion 6:\n");
function drawTriangle(a){
    let triangle="";
    for(let i=1 ;i<=a;i++) {
        for (let j = 1; j <= i; j++){
            triangle+=j;
    }
        triangle+="\n";
    }
    console.log(triangle);
}

drawTriangle(6);






// Question 7
console.log("\nQuestion 7:\n");
let string = 'Hello', int = 254;
let float = 25.4;
let arr = [1, 2, 3];
let object = {course: 'JS', part: 1};
let func = function(){return;};
let nullValue = null;
let undefinedValue;
let boolean = true;

let variables= [string,float,int,arr,object,func,nullValue,undefinedValue,boolean];
for (let v of variables)
console.log(v+" is "+typeof v);


//  Question 8
console.log("\nQuestion 8:\n");
let greet = (firstName, lastName, age)=>console.log("Hello, my name is "+firstName+" "+lastName+" I am "+age+" years old.")

// To test Question 8
greet('Ali', 'Faleh' , 10);


//Question 9
console.log("\nQuestion 9:\n");
let days= new Map();
days.set(1,"Monday");
days.set(2,"Teusday");
days.set(3,"Wednesday");
days.set(4,"Thursday");
days.set(5,"Friday");
days.set(6,"Saturday");
days.set(7,"Sunday");

console.log("Key\t Value");
for (let [num , day ] of days)
  console.log(num,day);




// Question 10
console.log("\nQuestion 10:\n");

let colors = ["white", "blue", "yellow", "black", "red", "green"];
let [firstColor, secondColor, ...otherColors ]= colors;
console.log(firstColor);
console.log(secondColor);
console.log(otherColors);




// Question 11
console.log("\nQuestion 11:\n");

let cold = ['autumn', 'winter'];
let warm = ['spring', 'summer'];

let seasons = ["Cool!",...cold,...warm,"Super Hot Summer!"];
console.log(seasons);



//Question 12
console.log("\nQuestion 12:\n");
let nums = [1, 2, 3, 4, 45, 5, 6];
let max = Math.max(...nums);
console.log("The maximum number is: "+max);


//Question 13
console.log("\nQuestion 13:\n");
//Part a
let square = (x)=> x * x;
let numbers = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let squaredNums = numbers.map(square);
console.log(squaredNums);

//Part b
squaredNums2 = numbers.map(x=> x * x);
console.log(squaredNums2);



// Question 14

console.log("\nQuestion 14:\n");
let nums2 = [1, 2, 3, 4, 5, 6, 7, 8];

let squaredEvenNums= nums2.filter(nums2 => nums2%2==0).map(x=> x*x);
console.log(squaredEvenNums);



// Question 15
console.log("\nQuestion 15:\n");
let nums3 = [2, 4, 5];
let y=nums3.map(x=>x*x).reduce((accumlator,current)=>accumlator+current);

console.log("Sum and Squared is: "+y);
console.log("Average number is : "+y/nums3.length);




// Question 16
console.log("\nQuestion 16:\n");
let order =[8,7,6,5,4,3,2,1];

let ascending=order.sort((previous,current)=> previous-current);
console.log("in Ascending order: ["+ascending +"]");

let descending=order.sort((previous,current)=> current-previous);
console.log("in Descending order: ["+descending +"]");





