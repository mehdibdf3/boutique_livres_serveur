const express = require('express');
const router = express.Router();
const articlePanierController = require('../controllers/articlePanierController');
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require('../middleware/isAdmin');

// Appliquer verifyToken à toutes les routes
router.use(verifyToken);

// Routes pour les actions sur les articles du panier
router.post('/', articlePanierController.create);
router.get('/', articlePanierController.findAll);
router.get('/:id', articlePanierController.findOne);
router.put('/:id', articlePanierController.update);
// Seul un admin peut supprimer un article du panier
router.delete('/:id', isAdmin, articlePanierController.delete);

module.exports = router;