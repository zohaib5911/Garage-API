const mongoose = require('mongoose');
const PartSchema = require('./Parts.schema.js'); 

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
    parts: {
        type : [PartSchema],
        required : false,
        default : []
     }
}, {
    timestamps: true,
});

module.exports = CarSchema;

