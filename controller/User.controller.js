const mongoose = require('mongoose');
const User = require("../models/User.model.js");

const regester = async (req,res)=>{
    try{
        const user = await User.create(req.body);
        console.log("New User Registered!");
        res.status(200).json({user});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};

const getAll = async (req,res)=>{
    try{
        const user = await User.find({});
        console.log("All User Sent!");
        res.status(200).json({user});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};

const getID = async (req,res)=>{
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }        
        console.log(id," User Sent!");
        res.status(200).json({user});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};

const updateUser = async (req,res)=>{
    try{
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id,
            {$set : req.body},
            { new : true , runValidators : true }
        );
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }
        console.log("User Updated!");
        res.status(200).json({user});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};


const deleteUser = async (req,res)=>{
    try{
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }
        console.log("User Deleted!");
        res.status(200).json({message : "User Deleted!"});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};

const verifyLogin = async (req,res)=>{
    try{
        const {email , password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }
        if(!user.email || !user.password){
            return res.status(400).json({message: "Email and Password are required for login."});
        }
        if(user.email !== email || user.password !== password){
            return res.status(401).json({message: "Invalid email or password."});
        }
        console.log(user.id,"User Login!");
        res.status(200).json({message : "Login Successfully!"});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};
// For Cars controller
const addCar = async (req,res) => {
    try{
        console.log(req.body);
        const { id } = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }
        if(!user.cars) {
            user.cars = [];
        }
        user.cars.push(req.body);
        await user.save();
        console.log("New Car Added!");
        res.status(200).json({user});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};
const getCars = async (req,res) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }
        console.log("User Cars Sent!");
        res.status(200).json({cars: user.cars});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};

const getCarById = async (req,res) => {
    try{
        const { id, carId } = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }
        const car = user.cars.id(carId);
        if(!car){
            console.log(car,"Available Cars");
            return res.status(404).json({message :" Car Not Found!"});
        }
        console.log("Car Sent!");
        res.status(200).json({car});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};

const  updateCar = async (req,res) => {
    try{
        const { id, carId } = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }
        const car = user.cars.id(carId);
        if(!car){
            return res.status(404).json({message :" Car Not Found!"});
        }
        Object.assign(car, req.body);
        await user.save();
        console.log("Car Updated!");
        res.status(200).json({car});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};

const getParts = async (req, res) => {
    try{
        const { id ,carId } = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }
        const car = user.cars.id(carId);
        if(!car){
            return res.status(404).json({message :" Car Not Found!"});
        }
        console.log("User Parts Sent!");
        res.status(200).json({parts: car.parts});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};

const addPart = async (req, res) => {
    try{
        const { id ,carId } = req.params;
        const newPart = req.body;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }
        const car = user.cars.id(carId);
        if(!car){
            return res.status(404).json({message :" Car Not Found!"});
        }
        car.parts.push(newPart);
        console.log(car.parts);
        console.log();
        console.log(newPart);
        await user.save();
        console.log("New Part Added!");
        res.status(200).json({user});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};

const getPartById = async (req, res) => {
    try{
        const { id, carId, partId } = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }
        const car = user.cars.id(carId);
        if(!car){
            return res.status(404).json({message :" Car Not Found!"});
        }
        const part = car.parts.id(partId);
        if(!part){
            return res.status(404).json({message :" Part Not Found!"});
        }
        console.log("Part Sent!");
        res.status(200).json({part});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};

const updatePart = async (req, res) => {
    try{
        const { id, carId, partId } = req.params;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }
        const car = user.cars.id(carId);
        if(!car){
            return res.status(404).json({message :" Car Not Found!"});
        }
        const part = car.parts.id(partId);
        if(!part){
            return res.status(404).json({message :" Part Not Found!"});
        }
        Object.assign(part, req.body);
        await user.save();
        console.log("Part Updated!");
        res.status(200).json({part});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};


const searchUser = async (req,res)=>{
    try{
        if(!req.body){
            return res.status(404).json({message :" ID is required!"});
        }
        const { id  } = req.body;
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({message :" User Not Found!"});
        }        
        console.log(id," User Sent!");
        res.status(200).json({user});
    }
    catch(error){
        res.status(500).json({message : error.message });
    }
};

module.exports = {
    deleteUser,
    regester,
    getAll,
    getID,
    updateUser,
    verifyLogin,

    searchUser,

    // car
    addCar,
    getCarById,
    updateCar,
    getCars,
    getParts,
    addPart,
    getPartById,
    updatePart
};