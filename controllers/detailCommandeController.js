const { DetailCommande } = require('../models');

exports.create = async (req, res) => {
    try {
        const detailCommande = await DetailCommande.create(req.body);
        res.status(201).send(detailCommande);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.findAll = async (req, res) => {
    try {
        const detailsCommande = await DetailCommande.findAll();
        res.status(200).send(detailsCommande);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.findOne = async (req, res) => {
    try {
        const detailCommande = await DetailCommande.findByPk(req.params.id);
        if (!detailCommande) {
            return res.status(404).send({ message: 'DetailCommande not found!' });
        }
        res.status(200).send(detailCommande);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await DetailCommande.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedDetailCommande = await DetailCommande.findByPk(req.params.id);
            res.status(200).send(updatedDetailCommande);
        } else {
            res.status(404).send({ message: 'DetailCommande not found.' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await DetailCommande.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send({ message: 'DetailCommande deleted.' });
        } else {
            res.status(404).send({ message: 'DetailCommande not found.' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};