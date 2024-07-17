function evenodd(number){
    if(number%2==0) console.log("even");
    else console.log("odd")
}
evenodd(0);

function square(number){
    console.log(`square of ${number}:${number*number}`)
}
square(6)

function maxoftwo(a,b){
    if(a>b) console.log("a is greater then b")
        else console.log("b is greater")
}

maxoftwo(3,2)

function concat(a,b){
    console.log("concat of both is:"+a+b)
}
concat("kinish","neema")

let add2=(num1,num2)=>num1+num2
console.log(add2(3,5))

let str=(str1,char)=>str1.includes(char);
console.log(str("hello","x"));

function producttwo(b1,b2=5){
    console.log(b1*b2)
}
producttwo(2,6)

function person(name,age=20){
    console.log(`your name is ${name} and your age is ${age}`)
}
person("kinish",12)


let repeatfun=(func,num)=>{
    for(let i=0;i<num;i++){
        func();
    }
}
const func=()=>console.log("hello");
repeatfun(func,5)


function composefunction(func1,func2,value){
    return func2(func1(value))
}
const add9=(x)=>x+9;
const multiplyby5=(x)=>x*5;

const result=composefunction(add9,multiplyby5,9)
console.log(result)