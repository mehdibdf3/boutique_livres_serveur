const express = require('express');
const router = express.Router();


const detailCommandeController = require('../controllers/detailCommandeController');


router.post('/', detailCommandeController.create); 
router.get('/', detailCommandeController.findAll); 
router.get('/:id', detailCommandeController.findOne); 
router.put('/:id', detailCommandeController.update); 
router.delete('/:id', detailCommandeController.delete); 

module.exports = router;