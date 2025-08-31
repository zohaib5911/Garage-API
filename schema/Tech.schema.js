const mongoose = require('mongoose');

const TechnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Tech name is required"]
  },
  email : {
    type : String,
    required: [true,"Tech email is required"],
    unique: [true ,"Email Already Used "]
  },
   password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    validate: {
        validator: function(v) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(v);
        },
        message: props => `Password is not strong enough`
  },
      select : [false,"Can not get the password "]
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