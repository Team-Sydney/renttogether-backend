module.exports = (sequelize, Sequelize) => {
  const CustomBill = sequelize.define('CustomBills', {
    custom_bill_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    bill_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  });

 
  return CustomBill;
};

