const mongoose = require('mongoose');
const CarSchema = require("../schema/Car.schema.js");

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;

