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

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task1 = new Task({
    description: "Learn new technology",
    completed: true
})


task1.save().then(() => {
    console.log(task1)
}).catch((error) => {
    console.log(error)
})
