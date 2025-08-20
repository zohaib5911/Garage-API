const mongoose = require('mongoose');

const PartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    deliveryDate: {
        type : Date,
        required : false
    },
    status: {
        type: String,
        enum: ["Ordered", "Shipped", "Delivered", "Installed", "Pending"],
        default: "Pending"
    }
}, { _id: true });


module.exports = PartSchema;
