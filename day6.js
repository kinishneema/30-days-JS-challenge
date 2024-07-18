let arr=[1,2,3,4,5]
    console.log(arr)

console.log(arr[0])
console.log(arr[arr.length-1])

arr.push(6)
console.log(arr)

arr.pop()
console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(4)
console.log(arr)

const numbers1 = [1, 2, 3, 4];
const doubled = numbers1.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

const numbers2= [1, 2, 3, 4];
const evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const numbers3= [1, 2, 3, 4];
const sum = numbers3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10


for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

arr.forEach(num=>{
    console.log(num)
})


const array2d=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {
      console.log(`Value at [${i}][${j}]: ${array2d[i][j]}`);
    }
  }
  
console.log(array2d[1][2])