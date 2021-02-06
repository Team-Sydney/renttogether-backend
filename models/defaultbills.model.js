module.exports = (sequelize, Sequelize) => {
  const DefaultBill = sequelize.define('DefaultBills', {
    bill_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    bill_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  });

 
  return DefaultBill;
};

