// ARRAYS
let arr = [1,2,3,4,5];

for(let i=0;i<arr.length;i++) {
    console.log(arr[i]);
}
// console.log(arr[0]);
// console.log(arr[4]);
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

arr.push(10)
console.log(arr);
arr.pop()
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift(10)
console.log(arr);

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');

let newArr=[];
newArr.map((i) => (
     arr.push(i)

))

console.log(newArr);