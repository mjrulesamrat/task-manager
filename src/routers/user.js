const express = require('express')
const router = new express.Router()

const User = require('../models/user')

router.post('/users', async (req, res) => {
    console.log(req.body)
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch {
        res.status(400).send(e)
    }

})

router.get('/users', async (req, res) => {

    try {
        const users = await User.find({})
        res.send(users)
    } catch(e) {
        res.status(500).send()
    }
})

router.get('/users/:id', async (req, res) => {
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


router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        updates.forEach((update) => user[update] = req.body[update])

        await user.save({new: true})
        res.send(user)
    } catch(e) {
        console.log(e)
        res.status(500).send()
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id})
        if (!user) {
            res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router
