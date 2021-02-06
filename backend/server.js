const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const cors = require('cors')
const myRoutes = require('./routes/routes')

dotEnv.config()
mongoose.connect(process.env.DATABASE_CONNECT,
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => {console.log('DB connected')})
app.use(express.json())
app.use(cors())
app.use('/site', myRoutes)

app.listen(4000, console.log('server running'))

// http://localhost:4000/site/addStudent