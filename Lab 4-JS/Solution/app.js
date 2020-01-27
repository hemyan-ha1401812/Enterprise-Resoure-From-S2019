let x=10;
const y=20;

console.log(x);
x="Hello world";
console.log(x);
x=[1,2,3,4,5,6,7];
console.log(x);
 console.log(x.length);
console.log(x[2]);
console.log("This i sa string");
console.log('A');

console.table(x)
console.error("error message");
console.debug("Debug Message")
console.time("myForLoop");
for(let i=0;i<100000;i++){

}
console.timeEnd("myForLoop");

function display(){
 console.log("Hello, welcome to JS. The best programing language")

}
display();

function add(a,b){
 return a+b;

}
console.log(add(2,4));

function multiply(a,b){
 return a*b;

}
console.log(multiply(2,4));

function subtract(a,b){
 return a-b;

}
console.log(subtract(2,4));


let addition = (a,b)=>  a+b;

console.log("The Sum= "+add(12,44))







function netSal(sal,demoFunction) {
console.log("Your salary is "+ demoFunction(sal));
}
sal=10000;
 if (sal <= 10000)
  netSal(sal,sal => sal*0.9);
 else
  netSal(sal, sal => sal*0.85);






function compare(a){

 if (a>=18)
  return true;
 else
   return false;


}


/*
let ages=[22,13,14,19,30,50,33,22];
let qualified=[];
for (let i=0;i<ages.length;i++){
 if(ages[i]>=18){
  qualified.push(ages[i]);
 }

}*/

ages=[66,99,22,13,14,19,[4,5,6],[30,50,33],22];
console.log(ages);
console.log(ages.flat(Infinity));
ages1=[66,99,22,13,14];
ages2=[19,4,5,6,30,50,33,22];

let combiend=[...ages,...ages2];
console.log(combiend);


/*let qualified2= ages.filter(value => value>=18);*/
/*console.table(qualified2)*/
for (let age of ages){
 console.log(age);

}


ages.forEach(x=>console.log(x));




let total= ages.reduce((accumlator,current)=>accumlator+current);
console.log("Total sum: "+total);


let oldest= ages.reduce((accumlator,current)=>accumlator>current ? accumlator : current);
console.log("The oldest: "+oldest);
















let dataPoints = [2,4,18,28,9,5,6,7,8,9];
let avg = dataPoints.reduce((accumalator,current)=>accumalator+current) / dataPoints.length;


let sorted = dataPoints.sort((a,b)=>a-b);

console.log(sorted);









let matrix = [ [2, 3], [34, 89], [55, 101, 34], [34, 89, 34, 99]];


console.log("Original array");
console.log(matrix);
console.log("Flattened array: ");
console.log(matrix.flat(Infinity));
console.log("Max value: ");
console.log(matrix.reduce((a,b)=>a>b?a:b));



