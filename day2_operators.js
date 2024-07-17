// Task1:

const num1=26
const num2=6
add_result =num1+num2
sub_result=num1-num2
mul_result=num1*num2
div_result=num1/num2
console.log(add_result)
console.log(sub_result)
console.log(mul_result)
console.log(div_result.toFixed(2))
console.log(num1%num2)

let no1=8
let no2=6
no1+=no2


console.log(no1)
let n1=8
let n2=6
n1-=n2  // =>  this lead to 1 n1-n2 and what ever the result is there that is assigned to n1

console.log(n1)

console.log(n1>n2)
console.log(n1<n2)
console.log(no1==n1)
console.log(num2===no2)


const dL=false
const age=18

if(dL==true&&age>=18){
    console.log("Eligible to drive the vehicle")
} else {
    console.log("not eleigible for driving")
}

const degree= true
const experience=2

if(degree||experience>=2){
    console.log("you are selected for the job")
} else{
    console.log("better luck next time ")
}

const hiv=true

if(!hiv){
    console.log("you are healthy and can live uo to your expectation")
} else{
    console.log("you should go under treatment for Hiv as to increase the number of days for you to live upto")
}


let nu1=-88
const nu2= -55

 nu1 > 0 && nu1!=0 ? console.log("Positive"): console.log("negative")