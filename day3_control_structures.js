//task-1

const num1=55
 const num2=-88

 if(num2>0){
    console.log(`${num2} is positive `)

 } else if(num1==0){
    console.log(`${num2} is zero `)
 } else{
    console.log(`${num2} is negative`)
 }


//  task-2
 let person_age=18

 if(person_age>=18){
    console.log("You are eligible to vote")
 } else{
    console.log("you are not eligible to vote ")
 }


// task-3
 const no1=4
 const no2=5
 const no3=6

 if(no1>no2){
    console.log(`${no1}is grater than ${no2}.`)
 } else if(no2>no3){
    console.log(`${no2} is grater than ${no3}.`)
 }else if(no3>no1){
    console.log(`${no3} is greater than ${no1} and ${no2}.`)
 } 

//task-4
const day =6

switch (day) {
    case 1: console.log(`for Day-${day} today is Monday`)
        break;
    case 2: console.log(`for Day-${day} today is Tuesday`)   
        break; 
    case 3: console.log(`for Day-${day} today is Wednesday`)   
        break; 
    case 4: console.log(`for Day-${day} today is THursday`)   
        break; 
    case 5: console.log(`for Day-${day} today is Friday`)   
        break; 
    case 6: console.log(`for Day-${day} today is Saturday`)   
        break; 
    case 7: console.log(`for Day-${day} today is Sunday`)   
        break; 

    default: console.log(`unknown Day-${day}.`)
        break;
}


// /task 5
const score =75

switch (score) {
    case 100:console.log(`for the score-${score} the grade is 'A'.`)
        
        break;
    case 75:console.log(`for the score-${score} the grade is 'B'.`)
        
        break;
    case 60:console.log(`for the score-${score} the grade is 'C'.`)
        
        break;
    case 45:console.log(`for the score-${score} the grade is 'D'.`)
        
        break;
    case 32:console.log(`for the score-${score} the grade is 'F'.`)
        
        break;

    default:
        break;
}

// task 6
const num =5649841
num%2==0 ? console.log(`${num} is Even`) : console.log(`${num} is Odd`) 
 

// task 7
const year = 2028

if(year%4==0|| year %400==0){
    console.log(`${year} is a leap year `)
        
} else {
        console.log(`${year} is not a leap year `)
}

