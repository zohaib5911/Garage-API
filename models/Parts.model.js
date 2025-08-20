const mongoose = require('mongoose');
const Parts = mongoose.model('Parts', require('../schema/Parts.schema.js'));

module.exports = Parts;
