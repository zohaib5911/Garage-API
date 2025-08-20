const mongoose = require("mongoose");
const Car = require("../models/Car.model.js");

const createCar = async (req, res) => {
    try {
        const newCar = new Car(req.body);
        await newCar.save();
        res.status(201).json(newCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.status(200).json(cars);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getCarById = async (req, res) => {
    try{
        const { id } = req.params;
        const car = await Car.findById(id);
        if(!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};

const updateCar =  async(req,res) => {
    try{
        const { id } = req.params;
        const car = await Car.findByIdAndUpdate(id, req.body, { new: true });
        if(!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};

const deleteCar = async (req, res) => {
    try{
        const { id } = req.params;
        const car = await Car.findByIdAndDelete(id);
        if(!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};    

const updateStatus = async (req, res) => {
    try{
        const { id } = req.params;
        const { status } = req.body;
        const car = await Car.findByIdAndUpdate(id,
        { status }, { new: true });
        if(!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};    


module.exports = {
    createCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar,
    updateStatus
};