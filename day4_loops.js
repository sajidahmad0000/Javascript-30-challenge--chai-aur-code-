// task1 

for (let i =1;i<=10;i++){
    console.log(i)
}
// task2
for(let i=1;i<=10;i++){
    result=5*i;
    console.log(`5 * ${i} = ${result}`);
}

//task3
let num=1;
let sum=0;
while (num<=10) {
    sum=sum+num;
    num+=1
} //after this while is broken the num has been updated to 11
console.log(sum)
console.log(num)

// task4
let numo=10
while(numo>=1){
    console.log(numo)
    numo--
}


let no1=1
do {
    console.log(no1)
    no1++

    
} while (no1<=5);

let no2=5
let fact=1

do{
    fact*=no2
    no2--;
    

    

}while(no2>=1)
console.log(fact)  

// task7

for(let i=1;i<=5;i++){
    let output='';
    for(let j=1;j<=i;j++){
        output+='*';
    }
    console.log(output)
}


// task8

for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i)
}

// task9

for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i)
}
    