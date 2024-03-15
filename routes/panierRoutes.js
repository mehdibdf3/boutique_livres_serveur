const express = require('express');
const panierController = require('../controllers/panierController');
const router = express.Router();

router.post('/', panierController.creerPanier);
router.post('/article', panierController.ajouterArticle);
router.get('/:id', panierController.afficherPanier);
router.delete('/article/:articleId', panierController.supprimerArticle);

module.exports = router;