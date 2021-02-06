const { Client } = require("pg");

function createRelationships(sequelize) {
    const { Groups, Clients, GroupMembers, GroupBills, DefaultBills, CustomBills } = sequelize.models;

    Groups.belongsToMany(Clients, { through: GroupMembers, foreignKey: 'group_id', otherKey: 'client_id' });
    Groups.belongsTo(Clients, { through: GroupMembers, foreignKey: 'creator_id', });
    Groups.hasMany(GroupBills, { foreignKey: 'group_id' });
    DefaultBills.hasMany(GroupBills, { foreignKey: 'default_bill_id' });
    CustomBills.hasMany(GroupBills, { foreignKey: 'custom_bill_id' });
}

module.exports = { createRelationships }