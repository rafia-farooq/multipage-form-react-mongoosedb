const express = require('express')
const route = express.Router()
const registerStudent = require('../models/registerStudent')
const bcrypt = require('bcrypt')

const objectId = require('mongoose').Types.ObjectId

route.get('/getStudent', (request, response) =>{
    registerStudent.find((error, doc) =>{
        if (!error){
            response.send(doc)
        }

        else{
            console.log("Data not found" + JSON.stringify(error))
        }
    })
})


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
        
route.put('/:id',async(request, response) => {
    if (!objectId,isValid(request.params.id)){
        return response.status(400).send("Selected ID not found: " + request.params.id)
    }

    const salt = await bcrypt.genSalt(5)
    const newPassword = await bcrypt.hash(request.body.password, salt)
    const record = new registerStudent({
        name: request.body.name,
        password: newPassword,
        age: request.body.age
    })
    
    record = new registerStudent({
    registerStudent:findByIdAndUpdate(request.params.id, 
        {$set: record},
        {new: true},
        (error, doc) =>{
            if (!error){
                response.send(doc)
            }
    
            else{
                console.log("Data not found" + JSON.stringify(error))
            }
        })
    })
})

    route.delete('/:id', (request, response)=>{
        if (!objectId,isValid(request.params.id)){
            return response.status(400).send("Selected ID not found: " + request.params.id)
        }
        
        const record = new registerStudent({
        registerStudent:findByIdAndRemove(request.params.id, 
            (error, doc) =>{
                if (!error){
                    response.send(doc)
                }
        
                else{
                    console.log("Data not deleted" + JSON.stringify(error))
                }
            })
        })
    })

module.exports = route