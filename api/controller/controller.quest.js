const Quest = require('../../model/model.quest');
const { SuccessResponse, ErrorResponse } = require('../responses/response');
const { loggingMiddleware, errorHandlingMiddleware } = require('../middleware/middleware.logging');

const questController = {
    createQuest: async (req, res) => {
        try {
            const quest = new Quest(req.body);
            const savedQuest = await quest.save();
            const response = new SuccessResponse('success', 'Quest inserted successfully', savedQuest, new Date(), 0);
            res.status(201).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to Insert Quest', error.message, new Date(), 0);
            res.status(400).json(response);
        }
    },

    getAllQuests: async (req, res) => {
        try {
            const quests = await Quest.find();
            const response = new SuccessResponse('success', 'List of quests', quests, new Date(), 0); 
            res.status(200).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to List Quests', error.message, new Date(), 0); 
            res.status(400).json(response);
        }
    },


    getQuestById: async (req, res) => {
        try {
            const quest = await Quest.findById(req.params.id);
            const response = new SuccessResponse('success', 'Quest found by ID', quest, new Date(), 0); 
            res.status(200).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to get Quest by ID', error.message, new Date(), 0); 
            res.status(400).json(response);
        }
    },


    updateQuest: async (req, res) => {
        try {
            const updatedQuest = await Quest.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            ); 
            const response = new SuccessResponse('success', 'Quest updated by ID', updatedQuest, new Date(), 0); 
            res.status(200).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to update Quest by ID', error.message, new Date(), 0); 
            res.status(400).json(response);
        }
    },


    deleteQuest: async (req, res) => {
        try {
            await Quest.findByIdAndDelete(req.params.id); 
            const response = new SuccessResponse('success', 'Quest deleted by ID', null, new Date(), 0); 
            res.status(204).json(response);
        } catch (error) {
            const response = new ErrorResponse('error', 'Failed to delete Quest by ID', error.message, new Date(), 0); 
            res.status(400).json(response);
        }
    },
};

module.exports = {
    questController, 
    loggingMiddleware,
    errorHandlingMiddleware,
};
