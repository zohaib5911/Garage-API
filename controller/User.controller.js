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
module.exports = {
    deleteUser,
    regester,
    getAll,
    getID,
    updateUser,
    verifyLogin
};