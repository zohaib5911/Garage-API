const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require("./routes/User.routes.js");
const partsRoutes = require("./routes/Parts.routes.js");
const carRoutes = require("./routes/Car.routes.js");
const techRoutes = require("./routes/Tech.routes.js");


//  From which port to list the requests 
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});

// Middle ware 
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// using routes 
app.use ('/api/user',userRoutes);
app.use ('/api/tech',techRoutes);
// app.use('/api/parts', partsRoutes);
// app.use('/api/cars',carRoutes);

app.get('/',(req,res)=>{
    res.send("Welcome to the Garage API")
});


// connecting to the database
mongoose.connect("mongodb://localhost:27017/GarageBackend")
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    console.log('🚀 Server is running on port 3000');
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
  });
