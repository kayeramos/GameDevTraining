const express = require('express');
const charactersRoutes = require('./routes.character');
const blocksRoutes = require('./route.block'); 
const itemsRoutes = require('./route.item');
const questsRoutes = require('./route.quest');

const staffRouter = express.Router();
staffRouter.use('/characters', charactersRoutes);
staffRouter.use('/blocks', blocksRoutes);
staffRouter.use('/items', itemsRoutes);
staffRouter.use('/quests', questsRoutes);

module.exports = staffRouter;
