const Item = require('../../model/model.item');
const { SuccessResponse, ErrorResponse } = require('../responses/response');
const { loggingMiddleware, errorHandlingMiddleware } = require('../middleware/middleware.logging');

const itemController = {
    createItem: async (req, res) => {
        try {
            const item = new Item(req.body);
            const savedItem = await item.save();
            const response = new SuccessResponse('success', 'Item inserted successfully', savedItem, new Date(), 0);
            res.status(201).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to Insert Item', error.message, new Date(), 0);
            res.status(400).json(response);
        }
    },

    getAllItems: async (req, res) => {
        try {
            const items = await Item.find();
            const response = new SuccessResponse('success', 'List of items', items, new Date(), 0);
            res.status(200).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to List Items', error.message, new Date(), 0);
            res.status(400).json(response);
        }
    },

    getItemById: async (req, res) => {
        try {
            const item = await Item.findById(req.params.id);
            const response = new SuccessResponse('success', 'Item found by ID', item, new Date(), 0);
            res.status(200).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to get Item by ID', error.message, new Date(), 0);
            res.status(400).json(response);
        }
    },


    updateItem: async (req, res) => {
        try {
            const updatedItem = await Item.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            const response = new SuccessResponse('success', 'Item updated by ID', updatedItem, new Date(), 0);
            res.status(200).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to update Item by ID', error.message, new Date(), 0);
            res.status(400).json(response);
        }
    },


    deleteItem: async (req, res) => {
        try {
            await Item.findByIdAndDelete(req.params.id);
            const response = new SuccessResponse('success', 'Item deleted by ID', null, new Date(), 0);
            res.status(204).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to delete Item by ID', error.message, new Date(), 0);
            res.status(400).json(response);
        }
    },
};

module.exports = {
    itemController,
    loggingMiddleware,
    errorHandlingMiddleware,
};
