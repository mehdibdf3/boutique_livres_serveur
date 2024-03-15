const { Sequelize, Utilisateur } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

exports.signup = async (req, res) => {
    const { nom, prenom, email, motDePasse, dateDeNaissance, username } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        return res.status(400).send({ message: "Email non valide." });
    }
    if (!motDePasse || motDePasse.length < 8 || !/[A-Z]/.test(motDePasse) || !/\d/.test(motDePasse) || !/[a-zA-Z0-9]/.test(motDePasse)) {
        return res.status(400).send({ message: "Le mot de passe n'est pas conforme aux exigences." });
    }
    try {
        const hashedPassword = await bcrypt.hash(motDePasse, 10);
        const utilisateur = await Utilisateur.create({
            nom,
            prenom,
            email,
            motDePasse: hashedPassword,
            dateDeNaissance,
            username
        });
        res.status(201).send({ message: "Utilisateur créé avec succès !" });
    } catch (error) {
        res.status(500).send({ message: "Erreur lors de la création de l'utilisateur." });
    }
};

exports.signin = async (req, res) => {
    const { emailOrUsername, motDePasse } = req.body;
    try {
        const utilisateur = await Utilisateur.findOne({
            where: {
                [Sequelize.Op.or]: [{ email: emailOrUsername }, { username: emailOrUsername }]
            }
        });
        if (!utilisateur) {
            return res.status(404).send({ message: "Utilisateur non trouvé." });
        }
        const isMatch = await bcrypt.compare(motDePasse, utilisateur.motDePasse);
        if (!isMatch) {
            return res.status(401).send({ message: "Mot de passe incorrect." });
        }
        const token = jwt.sign({ id: utilisateur.id }, process.env.JWT_SECRET, { expiresIn: "24h" });
        res.status(200).send({
            id: utilisateur.id,
            username: utilisateur.username,
            email: utilisateur.email,
            token
        });
    } catch (error) {
        res.status(500).send({ message: "Erreur de connexion." });
    }
};

exports.changePassword = async (req, res) => {
    res.status(501).send({ message: "Changement de mot de passe non implémenté." });
};

exports.forgotPassword = async (req, res) => {
    res.status(501).send({ message: "Oubli de mot de passe non implémenté." });
};

exports.resetPassword = async (req, res) => {
    res.status(501).send({ message: "Réinitialisation de mot de passe non implémenté." });
};

exports.updateProfile = async (req, res) => {
    res.status(501).send({ message: "Mise à jour de profil non implémenté." });
};

exports.deleteAccount = async (req, res) => {
    res.status(501).send({ message: "Suppression de compte non implémenté." });
};