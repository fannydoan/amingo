// Imports the express package into your file
const express = require('express');
// Imports the body parser package into your file
const bodyParser = require('body-parser');
// Imports mongoose into your file
const mongoose = require('mongoose');
// Imports the user model
const User = require('./models/User'); // or user.js

// Imports feed
const Feed = require('./models/Feed');

// Create an express app
const app = express(); // to use express

app.use(bodyParser.urlencoded({extended: false})); // to use body-parser
app.use(bodyParser.json()); // to use body-parser

const db = 'mongodb+srv://dbadmin:sorry234lol@cluster0-hmto8.mongodb.net/test?retryWrites=true&w=majority' // to use mongoDB to connect
mongoose
.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})  // Promise: when the promise is made, then I wil do xxx
.then(()=>{
  console.log('DB is connected')
})
.catch((err)=>{
  console.log('error',err)
})

 
    // Our first route
    // First argument: route
    // Second argument: callback
app.get('/', (req,res)=>{
    res.send("<h1>Welcome Home</h1>")
})

// To create the different routes => to include variable in brackets
app.get('/about', (req,res)=>{
  console.log('section',req.query.section)
  res.send(`    
  <h1>About Page</h1>
  <p>${req.query.section}</p>
  <p>${req.query.year}</p>
  <p>${req.query.industry}</p>
  `)
});

app.get('/contact', (req,res)=>{
  res.send("<h1>Contact Page</h1>")
});

// To make a dynamic page
  // 1. Function
app.get('/blog/:page', (req,res)=>{ 
  const page=req.params.page; //pour mettre le site dynamique, quelquesoit ce qu'on met à la place de page, ça le mettra dans Welcome
  res.send("<h1>Welcome to " + page + "</h1>")
});
  // 2. Query
  //app.get('/blog/our-history&2019-01-21')

// To create a registration
// => have to install body-parser
app.post('/register',(req,res)=>{
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  
  const formData = { // Building an object for info we will receive
    firstName : req.body.firstName, // In the left is the key, in the right is the value
    lastName : req.body.lastName,
    email : req.body.email,
    password : req.body.password,
  }

const newUser = new User(formData); // Creating a schema (specify structure of every entry data) + building a model

newUser
.save() //Promise
// If promise is fulfilled
.then((newUserData)=>{
  // Send response in the form of JSON
  res.json(newUserData)
})

// Otherwise...
.catch((err)=>{
  console.log('error', err);
})

});

// Feed
app.post('/feed',(req,res)=>{

  const formData = { // Building an object for info we will receive
    userName : req.body.userName, // In the left is the key, in the right is the value
    comment : req.body.comment,
    tags : req.body.tags,
    image : req.body.image,
    likes : req.body.likes,
    shares : req.body.shares,
  }

const newFeed = new Feed(formData); // Creating a schema (specify structure of every entry data) + building a model

newFeed
.save() //Promise
// If promise is fulfilled
.then((newFeedData)=>{
  // Send response in the form of JSON
  res.json(newFeedData)
})

// Otherwise...
.catch((err)=>{
  console.log('error', err);
})

});



app.listen(3000, ()=>{
  console.log('You are connected!')
})
