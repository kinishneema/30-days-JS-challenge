let number=3
if(number>0){
  console.log("number is postive")
}
else if(number<0) console.log("number is negative")
else{
    console.log("number is equal to zero")
}

let age=23;
if(age>=18)console.log("eligible to vote")
    else console.log("not eligible")

let a=10,b=20,c=30
if(a>b){
    if (a>c) console.log("a is greatest")
    else console.log("c is greatest")
}
else{
    if(b>=c) console.log("b is largest")
        else console.log("c is largest")
}

let key=2;
switch (key) {
    case 1:console.log("monday")
    break;
    case 2:console.log("t")
    break;
    case 3:console.log("w")
    break;
    case 4:console.log("t")
    break;
    case 5:console.log("f")
    break;
    case 6:console.log("s")
    break;
    case 7:console.log("sun")
    break;
    default:console.log("please enter hte right key")
    break;
}

let score=90;
switch(true){
    case(score>=90):console.log("grade is A")
    break;
    case(score>=80):console.log("grade is B")
    break;
    case(score>=70):console.log("grade is C")
    break;
    case(score>=60):console.log("grade is D")
    break;
    default:console.log("grades:f")
}

let number2=20;
if(number2%2==0) console.log("number is even")
    else console.log("number is odd")

const no=2005;
if(no%4==0){
    if(no%100===0){
        if(no%400===0){
            console.log(`${no} is a leap year`)
        }
        else{
            console.log(`${no} is not a leap year`)
        }
    }
    else{
        console.log(`${no} is leap year`)
    }
}
else{
    console.log(`${no} is not a leap year`)
} 