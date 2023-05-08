// Solution №1

let hamburgers =1;
let fries = 1;

if (hamburgers >=4 && fries >=1) {
    console.log('Ми поїли')
} else {
    console.log('Ми йдемо в інше кафе')
}

// Solution №2

let price = 1000;

if (price >=1000 && price <=1900) {
    console.log('Ціна знаходиться в заданному діапазоні')
}

// Solution №3 part 1
let price1 = 0;

if (price1 <=1000 || price1 >=1900) {
    console.log('Ціна не знаходиться в заданному діапазоні')
}

// Solution №3 part 2
let price2 = 1000;

if (!(price2 >=1000 && price2 <=1900)) {
    console.log('Ціна не знаходиться в заданному діапазоні')
}

// Solution №4

let numSeason = 2;

if (numSeason == 1){
    console.log('Winter')
} else if (numSeason == 2) {
    console.log('Spring')
} else if (numSeason == 3) {
    console.log('Summer')
} else if (numSeason == 4) {
    console.log('Autumn')
} else {
    console.log('Error')
}

// Solution №5

let a = 1;
let b = 2;
let c = 3;

if (a>b) {
    if (c>b) {
        if (c>a) {
            console.log(a)
        } else {
            console.log(c)
        }
    } else {
        console.log(b)
    }
} else
if (b>c) {
    if (a>c) {
        console.log(a)
    } else {
        console.log(c)
    }
} else {
    console.log(b)
}



// Solution 6
let number = 2;

switch(number){
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 3: 
        console.log('Wednesday');
        break;
    case 4: 
        console.log('Thursday');
        break;  
    case 5: 
        console.log('Friday');
        break;  
    case 6: 
        console.log('Saturday');
        break;  
    case 7: 
        console.log('Sunday');
        break;  
    default:
        console.log('Error');
        break;  
}


// Solution №7

let operation = "1";
let num1 = 10;
let num2 = 20;

switch(operation){
    case "+": 
        console.log(num1+num2);
        break;
    case "-": 
        console.log(num1-num2);
        break;
    case "/": 
        console.log(num1/num2);
        break;
    case "*": 
        console.log(num1*num2);
        break;  
    default:
        console.log('Error');
        break;  
}


// Solution №8

let expression = "Автоматизація"
console.log(expression.replace(/[аоуіиеяюєї]/gi,""))

// Solution №9

let m = 0.8;
let km = m/1000; 

if (m.toString().includes(".")) {
                 console.log(`${m} метрa це ${km} кілометра`)
}
else if (m ==1) {
                 console.log(`${m} метр це ${km} кілометра`)
} else if (m > 1 && m <5){
                 console.log(`${m} метри це ${km} кілометра`)
} else if (m>=5 && m<20 ) {
                 console.log(`${m} метрів це ${km} кілометра`)
} else if (m.toString().endsWith(1) && m> 20) {
                 console.log(`${m} метр це ${km} кілометра`)
} else if (m.toString().endsWith(2) || m.toString().endsWith(3) || m.toString().endsWith(4) && m>20 ) {
                 console.log(`${m} метри це ${km} кілометра`)
} else if (!(m.toString().endsWith(2) || m.toString().endsWith(3) || m.toString().endsWith(4)) && m<1000) {
                console.log(`${m} метрів це ${km} кілометра`)
} else if  (km.toString().includes(".")) {
                console.log(`${m} метрів це ${km} кілометра`)
} else if (km ==1) {
                console.log(`${m} метрів це ${km} кілометр`)
} else if (km>1 && km <5) {
                console.log(`${m} метрів це ${km} кілометри`)
} else if (km>=5 && km<20 ) {
                console.log(`${m} метрів це ${km} кілометрів`)
}else if (km.toString().endsWith(1) && km> 20) {
                console.log(`${m} метрів це ${km} кілометр`)
} else if (km.toString().endsWith(2) || km.toString().endsWith(3) || km.toString().endsWith(4) && km>20 ) {
                console.log(`${m} метрів це ${km} кілометри`)
} 
else {
                console.log(`${m} метрів це ${km} кілометрів`)
}