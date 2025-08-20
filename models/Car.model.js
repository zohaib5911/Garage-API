const mongoose = require('mongoose');
const PartSchema = require('../schema/Parts.schema.js'); 
const CarSchema = require("../schema/User.schema.js");

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;

