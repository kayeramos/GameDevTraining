const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Health: {
        type: Number,
        required: true,
    },
    Mana: {
        type: Number,
        required: true,
    },
    Level: {
        type: Number,
        required: true,
    },
    Experience: {
        type: Number,
        required: true,
    },
    Attack: {
        type: Number,
        required: true,
    },
    Defense: {
        type: Number,
        required: true,
    },
    MagicAttack: {
        type: Number,
        required: true,
    },
    MagicDefense: {
        type: Number,
        required: true,
    },
    Speed: {
        type: Number,
        required: true,
    },
    Skills: [{
        type: String,
        required: true,
    }],
    Inventory: [{
        ItemName: {
            type: String,
            required: true,
        },
        Quantity: {
            type: Number,
            required: true,
        }
    }]
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
