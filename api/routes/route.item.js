const express = require('express');
const router = express.Router();
const { itemController } = require('../controller/controller.item'); 

router.post('/insert', itemController.createItem);
router.get('/list', itemController.getAllItems); 
router.get('/find/:id', itemController.getItemById); 
router.patch('/update/:id', itemController.updateItem); 
router.delete('/delete/:id', itemController.deleteItem); 

module.exports = router;
