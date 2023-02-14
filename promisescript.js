//3. Creating a promise method. The promise will get resolved when timer times out.
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 6000)
})

//1. Console log before calling the promise
console.log("Before calling the promise");

//4. Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
})

//2. Console log after calling the promise
console.log("After calling promise");