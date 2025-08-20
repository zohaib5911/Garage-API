const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    noPlate:{
        type : String,
        required : [true, "Nnumber Plate is required"]
    },
    carModel:{
        type : String,
        required : [true, "Car Model is required"]
    },
    carBrand:{
        type : String,
        required : [true, "Car Brand is required"]
    },
    carStatus:{
        type : String,
        default : "Pending"
    }
},
    {
        timestamps: true,
    }
);

const Car = mongoose.model('Car', CarSchema);
module.exports = Car;    
