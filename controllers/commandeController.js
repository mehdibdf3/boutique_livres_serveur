const { Commande } = require('../models');

exports.create = async (req, res) => {
  try {
    const commande = await Commande.create(req.body);
    res.status(201).send(commande);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const commandes = await Commande.findAll();
    res.status(200).send(commandes);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findOne = async (req, res) => {
  try {
    const commande = await Commande.findByPk(req.params.id);
    if (!commande) {
      return res.status(404).send({ message: "Commande non trouvée !" });
    }
    res.status(200).send(commande);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Commande.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedCommande = await Commande.findByPk(req.params.id);
      res.status(200).send(updatedCommande);
    } else {
      res.status(404).send({ message: "Commande non trouvée." });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Commande.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send({ message: "Commande supprimée." });
    } else {
      res.status(404).send({ message: "Commande non trouvée." });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};