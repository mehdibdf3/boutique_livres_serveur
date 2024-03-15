const express = require('express');
const commandeController = require('../controllers/commandeController');
const router = express.Router();

router.post('/', commandeController.create);
router.get('/', commandeController.findAll);
router.get('/:id', commandeController.findOne);
router.put('/:id', commandeController.update);
router.delete('/:id', commandeController.delete);

module.exports = router;