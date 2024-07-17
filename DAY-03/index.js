// Control Structures
// if, else, switch, for, while, do while

//if - else statement - questions

let number = 1;
if (number < 0) {
  console.log("negetive");
} else if (number > 0) {
  console.log("possetive");
} else {
  console.log("zero");
}

let age = 18;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can't vote");
}

// nested if else statement
let num = 1;
if (num < 0) {
  console.log("negetive");
} else if (num > 0) {
  console.log("possetive");
  if (num % 2 == 0) {
    console.log("even number");
  } else {
    console.log("odd number");
  }
} else {
  console.log("zero");
}

// find largest number
let num1 = 10;
let num2 = 20;
let num3 = 30;
let largest = 0;
if (num1 > num2 && num1 > num3) {
  largest = num1;
} else if (num2 > num1 && num2 > num3) {
  largest = num2;
} else if (num3 > num1 && num3 > num2) {
  largest = num3;
} else {
  console.log("all are equal");
}
console.log(largest);

// Switch statements
let day = "sunday";
switch (day) {
  case "sunday":
    console.log("day off");
    break;
  case "monday":
    console.log("work day");
    break;
  case "tuesday":
    console.log("work day");
    break;
  case "wednesday":
    console.log("work day");
    break;
  case "thursday":
    console.log("work day");
    break;
  case "friday":
    console.log("work day");
    break;
  case "saturday":
    console.log("day off");
    break;
  default:
    console.log("invalid day");
    break;
}

// grade system in switch case
let mark = 95;
switch (mark) {
  case 90:
    console.log("A+");
    break;
  case 85:
    console.log("A");
    break;
  case 80:
    console.log("B+");
    break;
  case 75:
    console.log("B");
    break;
  case 70:
    console.log("C+");
    break;
  case 65:
    console.log("C");
    break;
  default:
    console.log("F");
}

// ternary opearetor
let nums = -2;
let result = nums > 0 ? "+ve" : (nums == 0 ? '0' : '-ve');
console.log(result);
