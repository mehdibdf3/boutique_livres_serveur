const { Livre } = require('../models');

exports.create = async (req, res) => {
  try {
    const livre = await Livre.create(req.body);
    res.status(201).send(livre);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const livres = await Livre.findAll();
    res.status(200).send(livres);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findOne = async (req, res) => {
  try {
    const livre = await Livre.findByPk(req.params.id);
    if (!livre) {
      return res.status(404).send({ message: "Livre non trouvé !" });
    }
    res.status(200).send(livre);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.update = async (req, res) => {
  try {
    const [updated] = await Livre.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedLivre = await Livre.findByPk(req.params.id);
      res.status(200).send(updatedLivre);
    } else {
      res.status(404).send({ message: "Livre non trouvé." });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Livre.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send({ message: "Livre supprimé." });
    } else {
      res.status(404).send({ message: "Livre non trouvé." });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};