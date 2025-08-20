const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require("./routes/User.routes.js");


//  From which port to list the requests 
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});

// Middle ware 
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use ('/api/user',userRoutes);


app.get('/',(req,res)=>{
    res.send("Welcome to the Garage API")
});


mongoose.connect('mongodb+srv://bscs23098:wTLvYa8zIHQefm1i@cluster0.yodbzkh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('MongoDB connected successfully');
    console.log('Server is running on port 3000');

})
.catch((error)=>{
    console.error('MongoDB connection error:', error);
});