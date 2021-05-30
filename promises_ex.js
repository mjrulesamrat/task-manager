const doWork = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("Hello world!")
        resolve([1, 2, 3])
        // reject("Error message here!!")
    }, 2000);
})

doWork.then((result) => {
    console.log("success!!", result)
}).catch((error) => {
    console.log(error)
})
