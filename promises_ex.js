// Promises are pending until they are fulfilled or rejected
const doWork = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("Hello world!")
        resolve([1, 2, 3])
        // reject("Error message here!!")
        resolve([2, 5, 6]) // this will have no effect at all
    }, 2000);
})

doWork.then((result) => {
    console.log("success!!", result)
}).catch((error) => {
    console.log(error)
})
