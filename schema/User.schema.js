const mongoose = require('mongoose');   
const CarSchema = require('../schema/Car.schema.js');   

const UserShema = mongoose.Schema({
    name:{
        type : String,
        required: [true, "Name is required"]
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true
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
    }
  }, cars:{
        type: [CarSchema],
        default: [],
        required: false
    }
},
{
  timestamps: true,
}
);
module.exports = UserShema;