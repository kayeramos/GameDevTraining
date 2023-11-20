const Character = require('../../model/model.character');
const { SuccessResponse, ErrorResponse } = require('../responses/response');
const { loggingMiddleware, errorHandlingMiddleware } = require('../middleware/middleware.logging');

const characterController = {
    createCharacter: async (req, res) => {
        try {
            const character = new Character(req.body);
            const savedCharacter = await character.save();
            const response = new SuccessResponse('success', 'Character inserted successfully', savedCharacter, new Date(), 0);
            res.status(201).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to Insert Character', error.message, new Date(), 0);
            res.status(400).json(response);
        }
    },

    getAllCharacters: async (req, res) => {
        try {
            const characters = await Character.find();
            const response = new SuccessResponse('success', 'List of characters', characters, new Date(), 0); 
            res.status(200).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to List Characters', error.message, new Date(), 0); 
            res.status(400).json(response);
        }
    },


    getCharacterById: async (req, res) => {
        try {
            const character = await Character.findById(req.params.id);
            const response = new SuccessResponse('success', 'Character found by ID', character, new Date(), 0); 
            res.status(200).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to get Character by ID', error.message, new Date(), 0); 
            res.status(400).json(response);
        }
    },


    updateCharacter: async (req, res) => {
        try {
            const updatedCharacter = await Character.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            ); 
            const response = new SuccessResponse('success', 'Character updated by ID', updatedCharacter, new Date(), 0); 
            res.status(200).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to update Character by ID', error.message, new Date(), 0); 
            res.status(400).json(response);
        }
    },


    deleteCharacter: async (req, res) => {
        try {
            await Character.findByIdAndDelete(req.params.id); 
            const response = new SuccessResponse('success', 'Character deleted by ID', null, new Date(), 0); 
            res.status(204).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to delete Character by ID', error.message, new Date(), 0); 
            res.status(400).json(response);
        }
    },
};

module.exports = {
    characterController, 
    loggingMiddleware,
    errorHandlingMiddleware,
};
