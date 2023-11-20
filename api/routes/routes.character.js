const express = require('express');
const router = express.Router();
const { characterController } = require('../controller/controller.character'); 


router.post('/insert', characterController.createCharacter);
router.get('/list', characterController.getAllCharacters); 
router.get('/find/:id', characterController.getCharacterById); 
router.patch('/update/:id', characterController.updateCharacter); 
router.delete('/delete/:id', characterController.deleteCharacter); 

module.exports = router;
