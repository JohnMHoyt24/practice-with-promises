//Creating a promise method. The promise will get resolved when timer times out.
let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved")
    }, 3000)
})

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved")
    }, 6000)
})


//Console log before calling the promise
console.log("Before calling the first promise");
console.log("Before calling the second promise");

//Call the promise and wait for it to be resolved and then print a message.
firstPromise.then((successMessage) => {
    console.log("From Callback 1 " + successMessage)
})

secondPromise.then((successMessage) => {
    console.log("From Callback 2 " + successMessage)
})

//Console log after calling the promise
console.log("After calling the first promise");
console.log("After calling the second promise");