require('../src/db/mongoose')

const User = require('../src/models/user')

const updateAgenandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({ age })
    return count
}

updateAgenandCount('60b4bbd7d2ba3c07bcbafdd0', 2).then((result) => {
    console.log("Result: ", result)
}).catch((e) => {
    console.log("Error: ", e)
})
