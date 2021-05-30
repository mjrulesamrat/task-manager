// CRUD operations

const { MongoClient, ObjectID } = require('mongodb')
require('dotenv').config()

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

    // db.collection('users').insertOne({
    //     name: "Jay Modi",
    //     age: 29,
    // }, (error, result) => {
    //     if (error){
    //         return console.log("Unable to insert user")
    //     }
    //     console.log("Result: ", result.ops)
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: "Jen",
    //         age: 28,
    //     },
    //     {
    //         name: "Professor",
    //         age: 37
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log("Unable to insert users")
    //     }
    //     console.log("Result: ", result.ops)
    // });

    // console.log("Users inserted successfully!")

    // db.collection('tasks').insertMany([
    //     {
    //         description: "Do something",
    //         completed: false,
    //     },
    //     {
    //         description: "Do another thing",
    //         completed: true,
    //     },
    //     {
    //         description: "work on this course",
    //         completed: true,
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log("Unable to create tasks")
    //     }
    //     console.log("Result: ", result.ops)
    // });

    // db.collection('tasks').findOne({ _id: new ObjectID("60b35f8c83432a0ecf173d03")}, (error, data) => {
    //     if (error){
    //         return console.log(error)
    //     }
    //     console.log(data);
    // })

    // db.collection('tasks').updateOne({
    //     _id: new ObjectID('60b35f8c83432a0ecf173d01')
    // },
    // {
    //     $inc: {
    //         age: 3
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').updateMany({
        completed: false
    },
    {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


    client.close()
})
