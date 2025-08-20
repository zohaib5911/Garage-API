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
    try {
        console.log("Update Status of Car");
        console.log("Request params:", req.params);
        console.log("Request body:", req.body);

        const { id } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ message: "Status is required" });
        }

        const car = await Car.findByIdAndUpdate(
            id,
            { $set: { status } },
            { new: true }
        );

        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        res.status(200).json(car);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
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


const getParts = async (req, res) => {
    try {
        const { id } = req.params;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        if (!car.parts || car.parts.length === 0) {
            return res.status(200).json({ message: 'No parts found for this car', parts: [] });
        }
        res.status(200).json({ parts: car.parts });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Server error', error: error.message });
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

const updatePart = async (req, res) => {
    try {
        console.log("Update Parts ");
        const { id, partId } = req.params;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }
        const part = car.parts.id(partId);
        if (!part) {
            return res.status(404).json({ message: 'Part not found' });
        }
        const allowedFields = ['name', 'price'];
        allowedFields.forEach(field => {
            if (req.body[field] !== undefined) {
                part[field] = req.body[field];
            }
        });
        await car.save();
        res.status(200).json({ message: 'Part updated successfully', part });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


const deletePart = async (req, res) => {
    try {
        const { id, partId } = req.params;

        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        // Remove part using pull
        const part = car.parts.id(partId);
        if (!part) {
            return res.status(404).json({ message: 'Part not found' });
        }

        car.parts.pull(partId); // This safely removes the subdocument
        await car.save();

        res.status(200).json({ message: 'Part deleted successfully', deletedPart: part });
     }
         catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updatePartStatus = async (req, res) => {
    try {
        const { id, partId } = req.params;
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        const part = car.parts.id(partId);
        if (!part) {
            return res.status(404).json({ message: 'Part not found' });
        }
        if (req.body.status) part.status = req.body.status;
        await car.save();

        res.status(200).json(part);
    } catch (error) {
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