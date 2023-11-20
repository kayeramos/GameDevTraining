const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    Effects: [{
        type: String,
        required: true,
    }],
    Value: {
        type: Number,
        required: true,
    },
    Rarity: {
        type: String,
        required: true,
    },
    ImagePath: {
        type: String,
        required: true,
    },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
