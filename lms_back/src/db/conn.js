const mongoose = require('mongoose')


mongoose.connect('mongodb://0.0.0.0:27017/books',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log("Connection Succesfull");
}).catch((error)=>console.log(error));