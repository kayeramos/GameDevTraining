const express = require('express');
const router = express.Router();
const { blockController } = require('../controller/controller.block'); 


router.post('/insert', blockController.createBlock);
router.get('/list', blockController.getAllBlocks); 
router.get('/find/:id', blockController.getBlockById); 
router.patch('/update/:id', blockController.updateBlock); 
router.delete('/delete/:id', blockController.deleteBlock); 

module.exports = router;
