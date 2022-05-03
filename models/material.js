module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Material', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: DataTypes.STRING,
      color: DataTypes.STRING,
      volume: DataTypes.INTEGER,
      cost: DataTypes.INTEGER,
      deliveryDate: DataTypes.DATE,
  });
};
