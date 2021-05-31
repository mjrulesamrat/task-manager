const app = require('./app')
require('dotenv').config()

const User = require('./models/user')
const Task = require('./models/task')

const port = process.env.PORT

app.post('/users', (req, res) => {
    console.log(req.body)
    const user = new User(req.body)

    user.save().then(() => {
        res.status(200).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.post('/tasks', (req, res) => {
    console.log(req.body)
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(200).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
