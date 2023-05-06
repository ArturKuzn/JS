console.log('Request to server.....');

setTimeout(() => {
    console.log('Response data preparation....');

    const product = {
        name: 'Laptop',
        price: 10000
    }


    setTimeout(() => {
        product.status = 'inStock';
        console.log(product);
    }, 2000)


}, 10000);

const req = new Promise((resolve, reject) = {});



const req2 = new Promise((resolve, reject) => {
    console.log('Request to server.....');

setTimeout(() => {
    console.log('Response data preparation....');

    const product = {
        name: 'Laptop',
        price: 10000
    }


    setTimeout(() => {
        product.status = 'inStock';
        console.log(product);
    }, 2000)


}, 10000);
})





const req3 = new Promise((resolve, reject) => {
    console.log('Request to server.....');

    setTimeout(() => {
    console.log('Response data preparation....');

    const product = {
        name: 'Laptop',
        price: 10000
    }

    resolve(product);

}, 10000);
})

req3.then(() => {
    setTimeout(() => {
        product.status = 'inStock';
        console.log(product);
    }, 2000)
})




const req4 = new Promise((resolve, reject) => {
    console.log('Request to server.....');

    setTimeout(() => {
    console.log('Response data preparation....');

    const product = {
        name: 'Laptop',
        price: 10000
    }

    resolve(product);

}, 10000);
})

req4.then((product) => {
const req5 = new Promise ( (resolve, reject) => {
    setTimeout(() => {
        product.status = 'inStock';
        resolve (product);
    }, 2000)
})

req5.then( product => {
    console.log(product);
})
})



const req8 = new Promise((resolve, reject) => {
    console.log('Request to server.....');

    setTimeout(() => {
    console.log('Response data preparation....');

    const product = {
        name: 'Laptop',
        price: 10000
    }

    resolve(product);

}, 10000);
})

req8.then((product) => {
return  new Promise ( (resolve, reject) => {
    setTimeout(() => {
        product.status = 'inStock';
        resolve (product);
    }, 2000)
})

}).then( product => {
    product.isModified = true;
    return product;

}).then ( product => {
    console.log(product)
})


let error = false;
const req9 = new Promise((resolve, reject) => {
    console.log('Request to server.....');

    setTimeout(() => {
    console.log('Response data preparation....');

    const product = {
        name: 'Laptop',
        price: 10000
    }

    if (error){
        reject(product)
    }
    resolve(product);

   

}, 10000);
})

req9.then((product) => {
return  new Promise ( (resolve, reject) => {
    setTimeout(() => {
        product.status = 'inStock';
        resolve (product);
    }, 2000)
})

}).then( product => {
    product.isModified = true;
    return product;

}).then ( product => {
    console.log(product)
}).catch( product  => {
    console.log('Error')
    console.log(product)
}).finally(() => {
    console.log('Finally')
})



