const mongoose = require('mongoose');


const questSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Objectives: [
        {
            Description: {
                type: String,
                required: true,
            },
            Completed: {
                type: Boolean,
                default: false,
            },
        },
    ],
    Reward: {
        type: String,
        required: true,
    },
});

const Quest = mongoose.model('Quest', questSchema);

module.exports = Quest;
