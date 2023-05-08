// Solution №1
function food (hamburgers,fries) {
    let action;
    if (hamburgers >=4 && fries >=1) {
        action = `Ми поїли`
    } else {
        action = `Ми йдемо в інше кафе`
        
    }
    return action;
}

console.log(food(0,1));

// Solution №2

const checkPriceInRangeArrow = (price) => {
    let result;
    if (price >=1000 && price <=1900) {
        result = `Ціна знаходиться в заданному діапазоні`
    } else {
        result = `Ціна не знаходиться в заданному діапазоні`
    }
    return result;
}

console.log(checkPriceInRangeArrow(1000));

// Solution №3 part 1

const checkPriceNotInRangeAnonym = function (price1) {
    let result2;
    if (price1 <=1000 || price1 >=1900) {
        result2 = `Ціна не знаходиться в заданному діапазоні`
    } else {
        result2 = `Ціна знаходиться в заданному діапазоні`
    }
    return result2;
}

console.log(checkPriceNotInRangeAnonym(1901));


// Solution №3 part 2

const checkPriceNotInRangeArrow = (price2) => {
    let result3;
    if (!(price2 >=1000 && price2 <=1900)) {
        result3 = `Ціна не знаходиться в заданному діапазоні`
    } else {
        result3 = `Ціна знаходиться в заданному діапазоні`
    }
    return result3;
}

console.log(checkPriceNotInRangeArrow(1000));

// Solution №4

function seasonDefine (numSeason) {
    let season;
    if (numSeason == 1){
        season = 'Winter'
    } else if (numSeason == 2) {
        season = 'Spring'
    } else if (numSeason == 3) {
        season = 'Summer'
    } else if (numSeason == 4) {
        season = 'Autumn'
    } else {
        season = 'Error'
    }
return season
}

console.log(seasonDefine(1));

// // Solution №5

function middleNumberDefine (a,b,c) {
    let middleNumber;
    if (a>b) {
        if (c>b) {
            if (c>a) {
                middleNumber = a
            } else {
                middleNumber = c
            }
        } else {
            middleNumber = b
        }
    } else
    if (b>c) {
        if (a>c) {
            middleNumber = a
        } else {
            middleNumber = c
        }
    } else {
        middleNumber = b
    }
    return middleNumber
}

console.log(middleNumberDefine(1,2,3));


// Solution №6 

function dayOfWeek (number) {
    let day;
    switch(number){
        case 1: 
            day = 'Monday'
            break;
        case 2: 
            day = 'Tuesday'
            break;
        case 3: 
            day = 'Wednesday'
            break;
        case 4: 
            day = 'Thursday'
            break;  
        case 5: 
            day = 'Friday'
            break;  
        case 6: 
            day = 'Saturday'
            break;  
        case 7: 
            day = 'Sunday'
            break;  
        default:
            day = 'Error'
            break;  
    }
    return day
}

console.log(dayOfWeek(1));


// Solution 7

const mathOperation = (operation, num1, num2) => {
    let result4;
    switch(operation){
        case "+": 
            result4 = num1+num2;
            break;
        case "-": 
            result4 = num1-num2;
            break;
        case "/": 
            result4 = num1/num2;
            break;
        case "*": 
            result4 = num1*num2
            break;  
        default:
            result4 = 'Error'
            break;  
    }
    return result4;
}

console.log(mathOperation("+", 5, 10));

// Solution №8

function cutVowels (expression) {
    let newExpression = expression.replace(/[аоуіиеяюєї]/gi,"");
    return newExpression
}

console.log(cutVowels("Автоматизація"));


// Solution №9

function convertMetersToKilometers (m) {
    let km = m/1000;
    let endingM;
    let endingKm;
    let mEndWithOne = m.toString().endsWith(1);
    let mEndWithTwo = m.toString().endsWith(2);
    let mEndWithThree = m.toString().endsWith(3);
    let mEndWithFour = m.toString().endsWith(4);
    let kmEndWithOne = km.toString().endsWith(1);
    let kmEndWithTwo = km.toString().endsWith(2);
    let kmEndWithThree = km.toString().endsWith(3);
    let kmEndWithFour = km.toString().endsWith(4);
    let mDecimal = m.toString().includes(".");
    let kmDecimal = km.toString().includes(".");
    let finalResult;

 if (mDecimal) {
        endingM = 'метра'
        endingKm = 'кілометра'
}  else if (m == 1 || (mEndWithOne && m> 20)) {
        endingM = 'метр'
        endingKm = 'кілометра'
} else if ((m > 1 && m <5) || (mEndWithTwo || mEndWithThree || mEndWithFour && m>20 ) ){
        endingM = 'метри'
        endingKm = 'кілометра'
} else if ((m>=5 && m<20) || (!(mEndWithTwo || mEndWithThree || mEndWithFour) && m<1000) || (km>1 && km <5) || kmDecimal ) {
        endingM = 'метрів'
        endingKm = 'кілометра'
} else if (km ==1 || (kmEndWithOne && km> 20) ) {
        endingM = 'метрів'
        endingKm = 'кілометр'
} else if (kmEndWithTwo || kmEndWithThree || kmEndWithFour && km>20 ) {
        endingM = 'метрів'
        endingKm = 'кілометри'
} else {
        endingM = 'метрів'
        endingKm = 'кілометрів'
}
finalResult = `${m} ${endingM} це ${km} ${endingKm}`;
return finalResult;
}

console.log(convertMetersToKilometers(1));

