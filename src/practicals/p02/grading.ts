// Write your code below
const input = Number(process.argv[2]);

if (input <= 0 && input >=0){
console.log("F");
}
else if (input <= 59 && input >=50){
console.log("D");
}
else if (input <= 69 && input >=60){
console.log("C");
}
else if (input <= 79 && input >=70){
console.log("B");
}
else if (input <= 100 && input >=80){
console.log("A");
}
else if (Number.isNaN(input) || input > 100 || input < 0){
console.log("Invalid input");
}
