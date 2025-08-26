const TechnSchema = require("../schema/Tech.schema.js");
const mongoose = require('mongoose');

const Tech = mongoose.model('Tech', TechnSchema);
module.exports = Tech;