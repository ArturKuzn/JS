/* Simple types
1. string
2. number
3. boolean
4. null
5. undefined
6. Symbol
7. bigint

Objects
1. object {}
2. arrays
3. date object
4. regular expressions
5. exception

*/

// boolean

let isExist = true; // false

// null, undefined

console.log(wqsad);

let value = null; 

console.log(value);

let value2;

console.log(value2);

// object
let obj ={};

let person = {
    name: "Artur",
    age: 33
};

let person1 = new Object();

person1.name = "Art"
person1.age = 33

console.log(person);
console.log(person1);

console.log(`Name : ${person1.name}`)


// array

let arr = ['text','some text', {name:123}]

//console.log(arr)

console.log(arr[0])


let numArr = [1,2,3];

let numObj = {
    a:1,
    b:2, 
    c:3
};

console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Anna': 1000,
    'Vlada': 1200
}

let salaryArr = ['Anna', 1000, 'Vlada', 1200]


let someText = " Hello world!"

console.log(someText.length)
console.log(someText.substring(0, 6))
console.log(someText.toUpperCase());
console.log(someText.toLowerCase());
console.log(someText.indexOf('o'));
console.log(someText.trim());
console.log(someText.charAt(5));


let myArr = [];

myArr.push("Good")
myArr.push("evening")

console.log(myArr);
//console.log(myArr.length);
//console.log(myArr.join(" "));
console.log(myArr.pop());
console.log(myArr);


let newObj = {
    a:1,
    b:2,
    c: 'test'
}

console.log(newObj.a);
delete newObj.a
console.log(newObj);
console.log(newObj.c.length);


let someNum = 12.4;

console.log(Math.round(someNum));

let resolution = "12.2px"

console.log(parseInt(resolution));
console.log(parseFloat(resolution));