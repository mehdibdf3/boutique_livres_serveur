// middleware/isAdmin.js
const { Utilisateur } = require('../models');

const isAdmin = async (req, res, next) => {
  try {
    // Vous devez avoir un système pour extraire l'ID utilisateur de la requête, par exemple via un token JWT
    const utilisateur = await Utilisateur.findByPk(req.userId);
    if (utilisateur.role === 'admin') {
      next();
    } else {
      res.status(403).send({ message: "Requiert le rôle d'admin!" });
    }
  } catch (error) {
    res.status(500).send({ message: "Impossible de vérifier le rôle de l'utilisateur." });
  }
};

module.exports = isAdmin;