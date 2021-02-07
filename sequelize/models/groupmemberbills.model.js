module.exports = (sequelize, Sequelize) => {

    const GroupMemberBill = sequelize.define('GroupMemberBills', {
        group_member_bill_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        paid: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
        // group_id FK NOT NULL
        // group_member_id FK NOT NULL
        // custom_bill_id FK NOT NULL
    })

    return GroupMemberBill;

}