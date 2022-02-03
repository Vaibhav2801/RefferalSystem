const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const users=require('./routes/user')


const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) 

//Database Connection
 const db=require('./config/keys').mongoURL
mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err))




app.use('/users',users)

//Server Setup
// app.get('/',(req,res)=>{
//     res.send("hello")
// })

const port=process.env.PORT || 5000

app.listen(port,()=> console.log('Server is up on port '+port))