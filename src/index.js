const app = require('./app')
require('dotenv').config()

const User = require('./models/user')
const Task = require('./models/task')

const port = process.env.PORT

app.post('/users', async (req, res) => {
    console.log(req.body)
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch {
        res.status(400).send(e)
    }

    // user.save().then(() => {
    //     res.status(201).send(user)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })
})

app.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch(e) {
        res.status(500).send()
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch(e) {
        res.status(500).send()
    }
})


app.patch('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findByIdAndUpdate(_id, req.body, {new: true})
        res.send(user)
    } catch(e) {
        res.status(500).send()
    }
})

app.post('/tasks', async (req, res) => {
    console.log(req.body)

    try {
        const task = new Task(req.body)
        await task.save()
        res.status(201).send(task)
    } catch(e) {
        res.status(400).send(e)
    }

})

app.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch(e) {
        res.status(500).send()
    }
})

app.get('/tasks/:id', async (req, res) => {

    try {
        const task = await Task.findById(req.params.id)
        if(!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch(e) {
        res.status(500).send()
    }
})


app.patch('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send(task)
    } catch(e) {
        res.status(500).send()
    }
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
