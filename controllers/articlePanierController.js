const { ArticlePanier } = require('../models');

exports.create = async (req, res) => {
    try {
        const articlePanier = await ArticlePanier.create(req.body);
        res.status(201).send(articlePanier);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.findAll = async (req, res) => {
    try {
        const articlesPanier = await ArticlePanier.findAll();
        res.status(200).send(articlesPanier);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.findOne = async (req, res) => {
    try {
        const articlePanier = await ArticlePanier.findByPk(req.params.id);
        if (!articlePanier) {
            return res.status(404).send({ message: 'ArticlePanier not found!' });
        }
        res.status(200).send(articlePanier);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.update = async (req, res) => {
    try {
        const [updated] = await ArticlePanier.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedArticlePanier = await ArticlePanier.findByPk(req.params.id);
            res.status(200).send(updatedArticlePanier);
        } else {
            res.status(404).send({ message: 'ArticlePanier not found.' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await ArticlePanier.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send({ message: 'ArticlePanier deleted.' });
        } else {
            res.status(404).send({ message: 'ArticlePanier not found.' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
};