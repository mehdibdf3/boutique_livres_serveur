module.exports = (sequelize, DataTypes) => {
    const Livre = sequelize.define('Livre', {
      titre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      auteur: {
        type: DataTypes.STRING,
        allowNull: false
      },
      prix: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
     
    });
  
    return Livre;
  };