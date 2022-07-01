const config = require('config')
const express= require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const app=express()

const PORT = config.get('port')

const homeRoute = require('./routes/home')

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.use(express.static("public"))
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))

app.use(homeRoute)
async function start(){
    try
    {
        await mongoose.connect(config.get('connectionstring'),{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, ()=>{
            console.log('Server started on port...') })
        
    } catch (e)
    {
        console.log(e.message)
    }
} 

start()