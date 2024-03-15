module.exports = (sequelize, DataTypes) => {
    const Panier = sequelize.define('Panier', {

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {         
          model: 'Utilisateurs', 
          key: 'id'
        }
      },
      etat: {
        type: DataTypes.ENUM('actif', 'commandé'),
        defaultValue: 'actif'
      }

    });
  
    Panier.associate = function(models) {

      Panier.belongsTo(models.Utilisateur, {foreignKey: 'userId', as: 'utilisateur'});
    };
  
    return Panier;
  };