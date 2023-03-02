const express = require('express')
const bodyParser = require('body-parser')
const cors=require('cors')
// const router = require('./app/route/router')

const app =new express()
var corsOptions = {
    origin:"http://localhost:8080"
}
app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true }))

const db = require("./app/models")
db.sequelize.sync();
require("./app/route/tutorial.routes")(app)
require("./app/route/user.toute")(app)
require("./app/route/food.routes")(app)

app.use(express.static('./img'));



app.get('/',(req,res)=>{
    res.json({'message':"IBS系统"})
})


const PORT=3000;    
app.listen(PORT,()=>{
    console.log('端口:  {PORT}')
})



