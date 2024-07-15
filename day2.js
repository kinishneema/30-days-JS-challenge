let a=10
let b=20
c=a+b;
console.log(c)

let a1=12;
let a2=34;
c=a1%a2;
console.log(c)

let add=12;
add+=13;
console.log(add)

let sub=23;
sub-=12;
console.log(sub)

const com=12;
const com1=32;
if(com>com1){
    console.log(`${com} is greater than b`)
}
else{
    console.log(`${com1} is less`)
}

const c1=12;
const c2=32;
if(c1<c2){
    console.log(`${c1} is less than ${c2}`)
}
else{
    console.log(`${c2} is greater`)
}

let p=10;
let q=7;
if(p>=q){
    console.log(`${p} is greater`)
}
else{
console.log(`${q} is greater`)
}

let r=10;
let s=7;
if(r<=q){
    console.log(`${r} is smaller`)
}
else{
console.log(`${s} is greater`)
}

// Comparing two numbers using == and ===
const num1 = 10;
const num2 = '10';

console.log(num1 + " == " + num2 + " : " + (num1 == num2)); // true
console.log(num1 + " === " + num2 + " : " + (num1 === num2)); // false

const num3 = 10;
const num4 = 10;

console.log(num3 + " == " + num4 + " : " + (num3 == num4)); // true
console.log(num3 + " === " + num4 + " : " + (num3 === num4)); // true

const num5 = 10;
const num6 = 20;

console.log(num5 + " == " + num6 + " : " + (num5 == num6)); // false
console.log(num5 + " === " + num6 + " : " + (num5 === num6)); // false

let a4=12,b4=23,c4=43;
if(a4>b4 && a4>c4) console.log(`${a4} is greatest`)
else if(b4>a4 && b4>c4 ) console.log(`${b4} is gratest`)
else console.log(`${c4} is greatest`)

function task_12(a, b, c){
    if(a > b || a > c){
        console.log("a is either greater than b and c");
    }else if(b>a || b>c){
        console.log("b is either greater than a and c");
    }else{
        console.log("c is either greater than a and b");
    }
}
task_12(a, b, c);

//Task 13
function task_13(a, b){
    const condition = a == b;
    if(!condition){
        console.log("a is not equal to b");
    }else{
        console.log("a is equal to b");
    }
}

//task14
let a6=10;
let b6=-6;
a6>0? console.log("a is positive") : console.log("a is negative");
b6>0? console.log("b is positive") : console.log("b is negative");