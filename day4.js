// for(let i=0;i<=10;i++)
// {
//     console.log(i);
// }

// for(let i=1;i<=10;i++)
//     {
//         console.log(5*i);
//     }
   
let sum=0,i=1;
while(i<=10){
    sum=sum+i;
    i++;
}
console.log("sum"+sum)
  
// let i1=10;
// while(i1>=1){
//   console.log(i1);
//   i1--;
// }

let i2=1;
do{
    console.log(i2)
    i2++;
}
while(i2<=5)

let number=1,i5=5;
do{
    number=number*i5;
    i5--;

}
while(i5>=1)
console.log("number:"+number)

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//   let pattern = '';
//   for (let j = 1; j <= i; j++) {
//     pattern += '* ';
//   }
//   console.log(pattern);
// }


for(let i=1;i<=10;i++)
{
    if(i==5) continue;
    console.log(i);
}

for(let i=1;i<=10;i++)
    {
        if(i==7) break;
        console.log(i);
    }

