const express = require('express')
const app = express()
const tasksRoute = require('./router/taskRoutes')
const connectDB=require('./db/string')
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/error_handler')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks',tasksRoute)
app.use(notFound)
app.use(errorHandlerMiddleware)



const start = async()=>{
    try {
        await connectDB(process.env.MANGOOSE_URI)
        app.listen(3000, console.log('listing'))
    } catch (error) {
        console.log(error);
        
    }
}
start()
