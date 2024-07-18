const num=[1,2,3,4,5]

console.log(num)
console.log(typeof(num))

console.log(num[0],num[num.length-1])

num.push(6) // add element at the last of an array
console.log(num)
num.pop();  // remove the last element from array
console.log(num)
num.shift();   // removw the element from first position
console.log(num)
num.unshift(1)    //  add element at first position
console.log(num)


const output = num.map(double);

function double(x){
    return x*2;
}

console.log(output)


const binary= num.map((x)=>{
    return x.toString(2)
})

console.log(binary)

const isEven= num.filter((x)=> x%2===0)
console.log(isEven)


const sum=num.reduce(function (acc,curr){
    acc=acc+curr;
    return acc; 
},0)  // 0 is the second argument and the value for acc
 
console.log(sum)

const nums=[99,88,5,46,2,245,12];
const max = nums.reduce((acc,curr)=>{
    if(curr>acc){
        acc=curr;
    }
    return acc;
},0)

console.log(max)

//  reduce function takes a two argument first as function second as the value for acc
// the  reduce function which is takes has two parameters accumulator and current
// the curent represent the value on which we iterate
//  the acc or accumulator accumulate the value based on need for which we write logic  



// Task 10 

for(let i =0;i<num.length;i++){
    console.log(num[i])
}


// task 11
num.forEach((element) => {
        return console.log(element);
    });

// task 12

const arr2d=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(arr2d)

console.log(arr2d[0][2])
console.log(arr2d[2][2])