// Loops 

for(let i = 0;i < 10;i++) {
    console.log(i);
}

for(let i = 1;i <= 10;i++) {
    console.log(i*5);
}

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')

let num = 1234
let sum = 0;
while(num != 0) {
    // console.log(num % 10);
    sum += num % 10;
    num = Math.floor(num / 10); 
}
console.log(sum);

let number = 10;
while(number>0) {
    console.log(number);
    number--;
}

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')

let news = 1;
do {
    console.log(news);
    news++;
}while(news <= 5);

let factorial = 1;
let num1 = 5;
do {
    factorial *= num1;
    num1--;
}while(num1 > 0);

console.log(factorial);

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')

for(let i = 1;i<=5;i++) {
    for(let j = 1;j<=i;j++) {
        console.log('*');
    }
    console.log();
}