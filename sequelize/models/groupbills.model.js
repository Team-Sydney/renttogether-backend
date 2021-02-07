module.exports = (sequelize, Sequelize) => {
  const GroupBill = sequelize.define('GroupBills', {
    group_bill_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    total_cost: {
      type: Sequelize.FLOAT
    },
    paid_off: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    pdfBillRef: {
      type: Sequelize.STRING
    }
    // group_id FK NOT NULL
    // default_bill_id FK
    // custom_bill_id 
  });

 
  return GroupBill;
};

