const express = require('express');
const router = express.Router();
const { questController } = require('../controller/controller.quest'); 

router.post('/insert', questController.createQuest);
router.get('/list', questController.getAllQuests); 
router.get('/find/:id', questController.getQuestById); 
router.patch('/update/:id', questController.updateQuest); 
router.delete('/delete/:id', questController.deleteQuest); 

module.exports = router;
