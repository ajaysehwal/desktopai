const express=require('express');
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const ExpressApp=require('./apis');
// const test=require('./commands/recyclebin');
async function StartServer(){
require('dotenv').config();
var whitelist = ['https://youtube.com/','http://localhost:5173']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))
app.use(bodyParser.json());

 
app.get('/',(req,res,next)=>{
    res.send("Server is running live...")
  })
  app.listen(8000,()=>{
    console.log("Server is running on 8000")
})
ExpressApp(app,cors);
}
StartServer();

