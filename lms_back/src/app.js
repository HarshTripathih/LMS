const express = require('express')
const app = express();
const cors = require('cors');  //Cross-origin Resource Sharing
const bodyParser = require('body-parser')

const {mongoose } = require('mongoose');
require("./db/conn");

const port = process.env.PORT || 3002;

//set-up cors
app.use(cors());

//set-up bodyParser
app.use(bodyParser.json());

//define schema for books
const bookSchema = new mongoose.Schema({
    title: String,
    author : String,
    publisher : String,
    release_date : Date,
    pages : String,
    _id:Number,
});

//define the model for book schema
const Book = mongoose.model("Book",bookSchema);


//define the API end Points 

app.get("/api/books",async (req,res)=>{
    const books = await Book.find({});
    res.json(books);
   
})



app.post("/api/books",async (req,res)=>{
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.json(savedBook);
})

app.get("/api/records/:_id",async (req,res)=>{
    const books = await Book.find({_id:req.params._id});
    res.json(books);
    // console.log(books)
})
app.post("/api/records/",async (req,res)=>{
    console.log(req.body);
    const books = await Book.updateMany({_id:req.body._id},{$set:req.body})
    res.send(books)
    
})

app.put("/api/books/:_id",async (req,res)=>{
    const updatedBook = await Book.findByIdAndUpdate(req.params._id,req.body);
    res.json(updatedBook);
})

app.delete("/api/books/:_id",async (req,res)=>{
    const deletedBook = await Book.findByIdAndDelete(req.params._id);
    // console.log(req.params._id)
    res.json(deletedBook);
})


//start server

app.listen(port,()=>{
    console.log(`server is running at Port no ${port}`);
})