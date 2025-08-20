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
        const car = await Car.findByIdAndUpdate(id, 
            {$set : req.body }, { new: true });
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


const addPart = async (req,res) => {
    try {
        const { id } = req.params;
        const { name, price } = req.body;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        car.parts.push({ name, price });
        await car.save();
        res.status(201).json(car);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const removePart = async (req,res) =>{
    try{
        const { id, partId } = req.params;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        car.parts.id(partId).remove();
        await car.save();
        res.status(200).json(car);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }   
};

const getParts = async (req,res) => {
    try{
        const { id } = req.params;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        res.status(200).json(car.parts.id(partId));
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};

const getPartById = async (req,res) => {
    try{
        const { id , partId } = req.params;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        const part = car.parts.id(partId);
        res.status(200).json(part);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};

const updatePart = async (req,res) => {
    try{
        const { id , partId } = req.params;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        const part = car.parts.findByIdAndUpdate(partId, req.body, { new: true });
        res.status(200).json(part);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};

const deletePart = async (req,res) => {
    try{
        const { id , partId } = req.params;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        car.parts.id(partId).remove();
        await car.save();
        res.status(200).json(car);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
};

const updatePartStatus = async (req,res) => {
    try{
        const { id , partId } = req.params;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        car.parts.findByIdAndUpdate(partId, req.body, { new: true });
        await car.save();
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
    updateStatus,

    addPart,
    deletePart,
    updatePart,
    updatePartStatus,
    getParts,
    getPartById
};