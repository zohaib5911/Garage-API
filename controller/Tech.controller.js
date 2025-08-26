const Tech = require("../models/Tech.model.js");
const User = require("../models/User.model.js");
// const Car = require("..")
const mongoose = require("mongoose");

const createTech = async (req, res) => {
  try {
    const tech = new Tech(req.body);
    await tech.save();
    res.status(201).send(tech);
    console.log("Tech created:", tech);
  } catch (error) {
        res.status(400).json({message : error.message });
  }
};


const getAllTechs = async(req,res) => {
    try{
        const techs = await Tech.find();
        res.status(200).send(techs);
        console.log("All techs retrieved!");
    }catch(error){
        res.status(400).json({message : error.message });
    }
};

const searchTech = async (req, res) => {
  try {
    const { query } = req;
    const techs = await Tech.find(query);
    res.status(200).send(techs);
    console.log("Techs searched:", techs);
  } 
  catch (error) {
        res.status(400).json({message : error.message });
  }
};


const updateTech = async (req, res) => {
  try {
    const { id , updates } = req.body;
    const tech = await Tech.findByIdAndUpdate(id, updates, { new: true });
    if (!tech) {
      return res.status(404).json({ message: "Tech not found" });
    }
    res.status(200).send(tech);
    console.log("Tech updated:", tech);
  } catch (error) {
        res.status(400).json({message : error.message });
  }
};


const deleteTech = async (req, res) => {
  try {
    const { id } = req.body; 
    const tech = await Tech.findByIdAndDelete(id);
    if (!tech) {
      return res.status(404).send();
    }
    res.status(200).send(tech);
    console.log("Tech deleted:", tech);
  } catch (error) {
        res.status(400).json({message : error.message });
  }
};



// done 
const assignCar = async (req, res) => {
  try {
    const { techId, userId, carId } = req.body;

    const tech = await Tech.findById(techId);
    if (!tech) return res.status(404).json({ message: "Tech not found" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    console.log("User : ",user);
    const car = user.cars.find((c) => c._id.toString() === carId.toString());
    console.log("Car : ",car);
    if (!car) return res.status(404).json({ message: "Car not found" });
    // save only reference
    tech.assignedCars.push({ userId, carId });
    await tech.save();

    res.status(200).json(tech);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// update the car status 
const updateCarStatus = async (req,res) => {
    try{
    const { techId,userId, carId, status } = req.body;
    const tech = await Tech.findById(techId);
    if (!tech) return res.status(404).json({ message: "Tech not found" });
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    console.log("User : ",user);
    const car = user.cars.find((c) => c._id.toString() === carId.toString());
    console.log("Car : ",car);
    if (!car) return res.status(404).json({ message: "Car not found" });

    car.carStatus = status;
    await user.save();
    res.status(200).json({ message: "Car status updated successfully" });
    console.log("Car status updated : " ,userId, " => " , carId);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// updating tha parts status 
const updateCarPartStatus = async (req,res) => {
    try{
      const { techId,userId, carId, partId, status } = req.body;
      const tech = await Tech.findById(techId);
      if (!tech) return res.status(404).json({ message: "Tech not found" });
      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ message: "User not found" });
      const car = user.cars.find((c) => c._id.toString() === carId.toString());
      if (!car) return res.status(404).json({ message: "Car not found" });
      const part = car.parts.find((p) => p._id.toString() === partId.toString());
      if (!part) return res.status(404).json({ message: "Part not found" });
      part.status = status;
      await user.save();
      res.status(200).json({ message: "Parts status updated successfully" });
      console.log("Parts status updated : " ,userId, " => " , carId, " => ",  partId);
    }
    catch(error){
        res.status(400).json({message : error.message });
    }
};


module.exports = {
    createTech,
    getAllTechs,
    searchTech,
    updateTech,
    deleteTech,
    assignCar,
    updateCarStatus,
    updateCarPartStatus
};