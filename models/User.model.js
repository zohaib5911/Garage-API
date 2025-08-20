const mongoose = require('mongoose');   

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
    }
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', UserShema);
module.exports = User;