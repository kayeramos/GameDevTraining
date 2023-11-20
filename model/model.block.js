const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Texture: {
        type: String,
        required: true,
    },
    Solid: {
        type: Boolean,
        required: true,
    },
});

const Block = mongoose.model('Block', blockSchema);

module.exports = Block;
