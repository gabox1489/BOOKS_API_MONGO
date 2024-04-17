const express = require('express')
const {config}= require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
config()

const bookRoutes = require('./routes/book_routes')

//express para los middlewares
const app = express()
app.use(bodyParser.json())
app.use('/books', bookRoutes)

//CONEXION A LA BASE DE DATOS
mongoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection





const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`App running on port : ${port}`);
})