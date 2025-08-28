const mongoose = require('mongoose');

const TechnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Tech name is required"]
  },
  available: {
    type: Boolean,
    default: true
  },
  salary: {
    type: Number,
    required: [true,"Tech salary is required"]
  },
  expertise: {
    type: String,
    required: [true,"Tech expertise is required"]
  },
  experience: {
    type: Number,
    required: [true,"Tech experience is required"]
  },
  assignedCars: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      carId: { type: mongoose.Schema.Types.ObjectId, required: true } // subdocument id
    }
  ]

});

module.exports = TechnSchema;