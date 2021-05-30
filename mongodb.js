// CRUD operations

const mongodb = require('mongodb')
require('dotenv').config()

const MongoClient = mongodb.MongoClient

const db_username = process.env.MONGO_DB_USERNAME
const db_password = process.env.MONGO_DB_PASSWORD
const db_host = process.env.MONGO_DB_HOST
const db_port = process.env.MONGO_DB_PORT

const connectionURL = `mongodb://${db_username}:${db_password}@${db_host}:${db_port}`
console.log(connectionURL);
const databaseName = process.env.MONGO_DB_NAME

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {

    if (error){
        console.log(error)
        return console.log("SOmething went wrong!")
    }
    console.log("Connected correctly!!")

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: "Jay Modi",
        age: 29,
    });
    console.log("User inserted successfully!")
    client.close()
})
