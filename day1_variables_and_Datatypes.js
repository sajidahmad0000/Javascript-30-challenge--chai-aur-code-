var num=5
console.log(num)
let str="Challenge"
console.log(str)


const phonepe=true
console.log(phonepe)

const obj1={
    age:22,
    name:"sajid",
    student:true,
    activities:["football","pubg","ipad_drawings"]
}

const arr1=[num,str,phonepe]   // array is type of an object

console.log(arr1)
console.log(obj1)
console.log(typeof(num))   //=> number type 
console.log(typeof(str)) // =>String type
console.log(typeof(obj1))   // => object type
console.log(typeof(phonepe)) // => boolean type
console.log(typeof(arr1)) // => obejct type


let name="popo"
console.log(name)
name="zeba"
console.log(name)

const topYT="Mrbeast"  
console.log(topYT)
// topYT="Tseries"  //=>  gives typeError when reassigning to const variables
// console.log(topYT)    Error =>  "TypeError: Assignment to constant variable."