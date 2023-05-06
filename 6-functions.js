function sum (a, b) {
    let c = a + b;
    return c;
}

console.log(sum (12, 12))


const anonimFunction = function (a, b) {
    let c = a + b;
    console.log(c);
    return c;
}

anonimFunction(1,2)

const arrowFunc = (a,b) => {
    let c = a + b;
    console.log(c);
}

arrowFunc(1,2)

const funcWithDefaultParam = (a, b = 2) => {
    return (a * b)
}


const myRequestWithDate = (field1, timestamp = Date ()) => {
    let requestBody = {
        someData: 1,
        someData2 :2,
        timestamp : ''
    }

    requestBody.someData = field1;
    requestBody.timestamp = timestamp;

    return requestBody;
}

console.log(myRequestWithDate('aaa'))


const playWithReturnFunc = () => {
    for(let i = 0; i < 8; i++){
        console.log(i);
        if (i === 6) {
            return
        }
    }
}

playWithReturnFunc();

function first () {
    setTimeout(function (){
        console.log('First')
    }, 5000)
}


function someFunc () {
    console.log('hello')
}

first();
someFunc();


function someFuncWithCallback (param1, callBackFunction) {
    console.log(`here is my parameter: ${param1}`);
    callBackFunction();
}

someFuncWithCallback('assdd', function(){
    console.log('Text from callback')
})