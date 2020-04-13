function myPromise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    })
};

function myPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(20);
        }, 1500);
    })
}

function myPromise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 500);
    })
}

// Get all promises value into array
Promise.all([
    myPromise1(),
    myPromise2(),
    myPromise3()
]).then(res => {
    console.log(res)
}).catch(err => {
    console.log('Error:', err)
})

// Get the first promise value not interested if it resolved or rejected status
Promise.race([
    myPromise1(),
    myPromise2(),
    myPromise3()
]).then(res => {
    console.log(res)
}).catch(err => {
    console.log('Error:', err)
})

// Get promises value into array of object with promise (statue & value)
Promise.allSettled([
    myPromise1(),
    myPromise2(),
    myPromise3()
]).then(res => {
    console.log(res)
}).catch(err => {
    console.log('Error:', err)
})