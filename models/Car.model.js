const mongoose = require('mongoose');
const PartSchema = require('../schema/Parts.schema.js'); 

const CarSchema = new mongoose.Schema({
    noPlate: {
        type: String,
        required: [true, "Number Plate is required"]
    },
    carModel: {
        type: String,
        required: [true, "Car Model is required"]
    },
    carBrand: {
        type: String,
        required: [true, "Car Brand is required"]
    },
    carStatus: {
        type: String,
        default: "Pending"
    },
    parts: [PartSchema] 
}, {
    timestamps: true,
});

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;

