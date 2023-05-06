if (4==9) {
    console.log('Expression is true')
} else {
    console.log('Expression is false')
}


let num = 50;
if (num < 49) {
    console.log('error')
} else if (num > 100) {
    console.log('Some big number')
} else {
    console.log('Ok')
}


let num1 = 50;
(num1 === 50) ? console.log('Ok') : console.log('error')

//switch

let number = 50;
switch (number) {
    case 49:
        console.log('Your value is 49');
        break;
    case 50:
        console.log('Your value is 50');
        break;
    case 51:
        console.log('Your value is 51');
        break;
     case 52:
        console.log('Your value is 52');
        break;
    default:
        console.log('This is default output');
        break
}