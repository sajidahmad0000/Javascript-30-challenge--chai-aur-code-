const person= "Devi Lal Singh"
const age = 54;


console.log(`${person} is the Devil and his age is about ${age}.`)

console.log(`${person} is going to robb everyone in angel healthCare.
    and with that he helped all the children with disease are suffering.`)

    
const num=[1,[5,8],9,75,565,959];


const [first,second,...rest]=num;

console.log(first , second) 
console.log(...rest)

const books ={
    title:"gooseBumps 2: the haunted halloween",
    author:"DR. R.L Stein",
    year:"1992",
    greeting:function(){
        console.log(`${this.author} is the author of ${this.title}.`)
    },
    new_Edition:function(new_year){
        this.year=new_year
        console.log(`${this.title} is published in ${this.year}.`)
    },
    showcase:function(){
        console.log(`${this.title} is published in ${this.year}.`)

    }
}


// const {title,author}=books
const {title:heading, author:lekhak}=books

// console.log(title +" and "+author)
console.log(lekhak +' and '+ heading)



const team1=["negi","anurag","shankky_bhaiya"]
const full_team=["deepak_bhai",...team1,"yash","billu_bhai","rana"]
console.log(full_team)

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // Outputs: [1, 2, 3, 4, 5, 6]


const summing=(...nums)=>{
    return nums.reduce((sum,curr)=> {
        return sum=sum+curr
    },0)
}

console.log(summing(78,88,99,41))

// TAsk7
const product =(param1,param2=1)=>{
    return param1*param2;


}
console.log(product(55)) // as we have given the default value 
console.log(product(99,10)) //  if you give second argument it will override the default parameter value.


// task8
const firstName = 'Alice';
const lastName = 'Johnson';
const aging = 28;
const job = 'Designer';

const persona = {
    firstName,
    lastName,
    aging,
    job,
    greet() {
        console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm a ${this.job}.`);
    },
    ['favorite ' + 'activity']: 'Drawing'
};

console.log(persona);
// Outputs: 
// {
//   firstName: 'Alice',
//   lastName: 'Johnson',
//   age: 28,
//   job: 'Designer',
//   greet: [Function: greet],
//   'favorite activity': 'Drawing'
// }

persona.greet(); // Outputs: Hi, I'm Alice Johnson, and I'm a Designer.
console.log(persona['favorite activity']); // Outputs: Drawing
console.log(persona)

const key1 = 'firstName';
const key2 = 'lastName';
const key3 = 'age';

const persons = {
    [key1]: 'Alice',
    [key2]: 'Johnson',
    [key3]: 28,
};

console.log(persons); // Outputs: { firstName: 'Alice', lastName: 'Johnson', age: 28 }
