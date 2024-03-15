module.exports = (sequelize, DataTypes) => {
    const DetailCommande = sequelize.define('DetailCommande', {
      quantite: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      prixUnitaire: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      commandeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Commandes',
          key: 'id',
        },
      },
      livreId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Livres',
          key: 'id',
        },
      }
    });
  
    return DetailCommande;
  };