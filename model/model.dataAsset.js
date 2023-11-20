const mongoose = require('mongoose');

const dataAssetSchema = new mongoose.Schema({
    assetPath: {
        type: String,
        required: true,
    },
}, { _id: false });

const dataAsset = mongoose.model('DataAsset', dataAssetSchema);

module.exports = dataAsset;