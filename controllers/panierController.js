const { Panier, ArticlePanier, Livre } = require('../models');

exports.creerPanier = async (req, res) => {
  try {
    const panier = await Panier.create({ userId: req.body.userId });
    res.status(201).send(panier);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.ajouterArticle = async (req, res) => {
  try {
    const { panierId, livreId, quantite } = req.body;
    const article = await ArticlePanier.create({ 
      panierId, 
      livreId, 
      quantite 
    });
    res.status(201).send(article);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.afficherPanier = async (req, res) => {
  try {
    const panier = await Panier.findByPk(req.params.id, {
      include: [{
        model: ArticlePanier,
        as: 'articles',
        include: [{
          model: Livre,
          as: 'livre'
        }]
      }]
    });
    if (!panier) {
      return res.status(404).send({ message: "Panier non trouvé" });
    }
    res.status(200).send(panier);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.supprimerArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    const deleted = await ArticlePanier.destroy({
      where: { id: articleId }
    });
    if (deleted) {
      res.status(204).send({ message: "Article supprimé du panier." });
    } else {
      res.status(404).send({ message: "Article non trouvé." });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};