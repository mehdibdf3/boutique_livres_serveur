module.exports = (sequelize, DataTypes) => {
  const Utilisateur = sequelize.define('Utilisateur', {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    motDePasse: DataTypes.STRING,
    dateDeNaissance: DataTypes.DATEONLY,
    username: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user', 
    }
  });

  Utilisateur.associate = (models) => {
    Utilisateur.hasMany(models.Commande, {
      foreignKey: 'utilisateurId',
      as: 'commandes'
    });
  };

  return Utilisateur;
};