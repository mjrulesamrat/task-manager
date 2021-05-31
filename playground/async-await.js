const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b)
        }, 2000);
    })
}

const doWork = async () => {
    // throw new Error("Something went wrong!!")
    // return "jay modi"
    const sum = await add(1, 2)
    const sum2 = await add(sum, 2)
    const sum3 = await add(sum2, 2)
    return sum3
}

doWork().then((result) => {
    console.log("Result: ", result)
}).catch((e) => {
    console.log("Error: ", e)
})
