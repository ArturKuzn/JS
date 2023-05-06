console.log('arr' + ' - object');

let incr = 10;
let decr = 10;

//incr++;
//decr--;

//console.log(incr);
//console.log(decr);

//++incr
//--decr

console.log(incr++);
console.log(decr--);

console.log(++incr);
console.log(--decr);

console.log(5 <2);
console.log(5%2);



console.log(2*4 == 8)
console.log(2*4 == '8')
console.log(2*4 === '8')


let isChecked = true;
let isClosed = true;

console.log(isChecked && !isClosed);
console.log(isChecked || isClosed);

//0
//""
//null
//undefined
//NaN
//all expressions above are false


// want either 3 hamburger and cola or 2 nuggets and 2 fries

let hamburgers = 2;
let cola = 2;
let nuggets = 2;
let fries = 2;

if (hamburgers >= 3 && cola || nuggets >= 2 && fries >= 2) {
    console.log('All ate')
}