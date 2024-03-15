module.exports = (sequelize, DataTypes) => {
    const ArticlePanier = sequelize.define('ArticlePanier', {
      quantite: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },

    });
  
    return ArticlePanier;
  };