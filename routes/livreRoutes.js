const express = require('express');
const livreController = require('../controllers/livreController');
const router = express.Router();

router.post('/', livreController.create);
router.get('/', livreController.findAll);
router.get('/:id', livreController.findOne);
router.put('/:id', livreController.update);
router.delete('/:id', livreController.delete);

module.exports = router;