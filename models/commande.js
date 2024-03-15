module.exports = (sequelize, DataTypes) => {
    const Commande = sequelize.define('Commande', {
      dateCommande: DataTypes.DATE,
      statut: DataTypes.STRING,
      total: DataTypes.FLOAT,

    });
  
    Commande.associate = (models) => {
      Commande.belongsTo(models.Utilisateur, {
        foreignKey: 'utilisateurId',
        as: 'utilisateur'
      });
    };
  
    return Commande;
  };