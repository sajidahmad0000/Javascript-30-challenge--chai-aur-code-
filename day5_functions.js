
// task 1
function odd_even(num){
    if(num%2==0){
        console.log(`${num} is an even number`)
    } else {
        console.log(`${num} is odd number`)
    }
}

odd_even(87)

// task 2
function square_of_number(num){
    result=num*num
    return result
}

const output=square_of_number(7)
console.log(output)

// Task 3
const max_Number=function(num1,num2){
    if(num1>num2){
        console.log(`${num1} is greater than ${num2}`)

    } else {
        console.log(`${num2} is greater than ${num1}`)
    }
}

max_Number(96,185)

// task 4
const concatenate = function(str1,str2){
    return str1+str2
}

console.log(concatenate("po","po"))

// task 5
const add=(num1,num2)=>{
 return num1+num2
}

console.log(add(88,88))

// Task6
const characterCheck=(str)=>{
    if(str.includes('t')){
        return true 
    } else{
        return false
    }
}

console.log(characterCheck("horse"))

// Task 7
const multiply = (num1,num2=1)=> {
    return num1*num2
}
console.log(multiply(78))

// Task 8
const greetings = (name,age=18)=>{
    return console.log(`hello my name is ${name} and I am ${age} years Old.`)
}

greetings("sajid")


// Task 9
const high_order=(new_func,num)=>{
   while(num!=0){
    new_func();
    num--;
   }
}

const new_func=()=>{
    console.log("hello")
}
high_order(new_func,8)

// TASK 10
const higher_Order_function2=(func1,func2,value)=>{
    const result1=func1(value);
    const result2=func2(result1)
    return result2;
}

function adder(num){
    return num+num;
}
function multiplier(num){
    return num*num;
}

console.log(higher_Order_function2(adder,multiplier,5))