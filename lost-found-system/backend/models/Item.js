const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    status: { type: String, enum: ['lost', 'found'], required: true },
    mobile: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);
