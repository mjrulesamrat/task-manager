const doWork = async () => {
    throw new Error("Something went wrong!!")
    return "jay modi"
}

doWork().then((result) => {
    console.log("Result: ", result)
}).catch((e) => {
    console.log("Error: ", e)
})