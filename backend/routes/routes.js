const express = require('express')
const route = express.Router()
const registerStudent = require('../models/registerStudent')
const bcrypt = require('bcrypt')




route.post('/addStudent', async(request, response) => {
    const salt = await bcrypt.genSalt(5)
    const newPassword = await bcrypt.hash(request.body.password, salt)

    const record = new registerStudent({
        name: request.body.name,
        password: newPassword,
        age: request.body.age
    })

    record.save()
        .then(data=>response.json(data))
        .catch(error=>response.json(error))
})

module.exports = route