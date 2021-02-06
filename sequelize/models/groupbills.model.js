module.exports = (sequelize, Sequelize) => {
  const GroupBill = sequelize.define('GroupBills', {
    group_bill_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    pdfBillRef: {
      type: Sequelize.STRING
    }
    // group_id FK NOT NULL
    // default_bill_id FK
    // custom_bill_id FK
  });

 
  return GroupBill;
};

