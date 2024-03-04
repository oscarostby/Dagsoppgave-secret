const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    tittel: String,
    data: [String]
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
