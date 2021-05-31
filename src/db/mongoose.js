const mongoose = require('mongoose')
require('dotenv').config()

const db_username = process.env.MONGO_DB_USERNAME
const db_password = process.env.MONGO_DB_PASSWORD
const db_host = process.env.MONGO_DB_HOST
const db_port = process.env.MONGO_DB_PORT
const databaseName = process.env.MONGO_DB_NAME

const connectionURL = `mongodb://${db_username}:${db_password}@${db_host}:${db_port}/${databaseName}`

console.log(connectionURL);

mongoose.connect(connectionURL, {
    authSource: 'admin',
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const user1 = new User({
    name: "Jumbo",
    age: 30
})


user1.save().then(() => {
    console.log(user1)
}).catch((error) => {
    console.log(error)
})
