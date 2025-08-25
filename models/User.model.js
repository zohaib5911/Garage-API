const UserShema = require("../schema/User.schema.js");
const mongoose = require('mongoose');

const User = mongoose.model('User', UserShema);
module.exports = User;
