const Block = require('../../model/model.block');
const { SuccessResponse, ErrorResponse } = require('../responses/response');
const { loggingMiddleware, errorHandlingMiddleware } = require('../middleware/middleware.logging');

const blockController = {
    createBlock: async (req, res) => {
        try {
            const block = new Block(req.body);
            const savedBlock = await block.save();
            const response = new SuccessResponse('success', 'Block inserted successfully', savedBlock, new Date(), 0);
            res.status(201).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to Insert Block', error.message, new Date(), 0);
            res.status(400).json(response);
        }
    },

    getAllBlocks: async (req, res) => {
        try {
            const blocks = await Block.find();
            const response = new SuccessResponse('success', 'List of blocks', blocks, new Date(), 0); 
            res.status(200).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to List Blocks', error.message, new Date(), 0); 
            res.status(400).json(response);
        }
    },


    getBlockById: async (req, res) => {
        try {
            const block = await Block.findById(req.params.id);
            const response = new SuccessResponse('success', 'Block found by ID', block, new Date(), 0); 
            res.status(200).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to get Block by ID', error.message, new Date(), 0); 
            res.status(400).json(response);
        }
    },


    updateBlock: async (req, res) => {
        try {
            const updatedBlock = await Block.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            ); 
            const response = new SuccessResponse('success', 'Block updated by ID', updatedBlock, new Date(), 0); 
            res.status(200).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to update Block by ID', error.message, new Date(), 0); 
            res.status(400).json(response);
        }
    },


    deleteBlock: async (req, res) => {
        try {
            await Block.findByIdAndDelete(req.params.id); 
            const response = new SuccessResponse('success', 'Block deleted by ID', null, new Date(), 0); 
            res.status(204).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to delete Block by ID', error.message, new Date(), 0); 
            res.status(400).json(response);
        }
    },
};

module.exports = {
    blockController, 
    loggingMiddleware,
    errorHandlingMiddleware,
};
