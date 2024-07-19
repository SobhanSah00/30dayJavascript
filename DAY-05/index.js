// FUNCTION

function checkEvenOdd(n) {
  if (n % 2 == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

checkEvenOdd(5);

function sqareNumber(n) {
  console.log(n * n);
}

sqareNumber(5);

function greaterNumber(n1, n2) {
  if (n1 > n2) {
    console.log(n1 + " is greater than " + n2);
  } else {
    console.log(n2 + " is greater than " + n1);
  }
}

greaterNumber(5, 10);

function concatinateString(str1, str2) {
  let result = str1.concat(str2);
  console.log(result);
}
concatinateString("Hello ", "World");

const addTowNumber = (num1, num2) => {
  console.log(num1 + num2);
};

addTowNumber(5, 7);

const isStringContainsSpecificCharecter = (str, charcter) => {
  const index = str.search(charcter);
  //we can use also indexOf
  if (index == -1) {
    console.log("String does not contain " + charcter);
  } else {
    console.log("String contains " + charcter + " at index " + index);
  }
};
isStringContainsSpecificCharecter("sobhansahoo", "p");

const gretMessage = (name, age = 18) => {
  console.log(`Good Morning ${name} , your age is ${age}`);
};
gretMessage("Sobhan", 15);

const returnProduct = (num1, num2 = 10) => {
  return num1 * num2;
};

let products = returnProduct(10, 20);

console.log(products);

//wrote a higher order function that takes a function and a number and call the function that many tims
const callFunction = (func, num) => {
  for (let i = 0; i < num; i++) {
    func();
  }
};
const sayHello = () => {
  console.log("Hello");
};
callFunction(sayHello, 5);
