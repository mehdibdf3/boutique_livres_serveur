const { Utilisateur } = require('../models');

exports.creer = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.create(req.body);
    res.status(201).send(utilisateur);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Méthode de connexion 
exports.connexion = async (req, res) => {
  try {
    const { emailOrUsername, motDePasse } = req.body;
    const utilisateur = await Utilisateur.findOne({
      where: {
        [Sequelize.Op.or]: [{ email: emailOrUsername }, { username: emailOrUsername }]
      }
    });

    if (!utilisateur) {
      return res.status(404).send({ message: "Utilisateur non trouvé" });
    }

   
    res.send({ utilisateur });
  } catch (error) {
    res.status(500).send(error);
  }
};