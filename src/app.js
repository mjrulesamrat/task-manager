const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use((req, res, next) => {
    if(parseInt(process.env.MAINTENANCE) === 1){
        return res.status(503).send({"error": "Website under maintenance"})
    }
    next()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app
