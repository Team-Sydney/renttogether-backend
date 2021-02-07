function createRelationships(sequelize) {
    const { Groups, Clients, GroupMembers, GroupBills, DefaultBills, CustomBills, GroupMemberBills } = sequelize.models;

    Groups.belongsToMany(Clients, { through: GroupMembers, foreignKey: 'group_id', otherKey: 'client_id' });
    Groups.belongsTo(Clients, { through: GroupMembers, foreignKey: 'creator_id', });
    Groups.hasMany(GroupBills, { foreignKey: 'group_id' });
    DefaultBills.hasMany(GroupBills, { foreignKey: 'default_bill_id' });
    CustomBills.hasMany(GroupBills, { foreignKey: 'custom_bill_id' });
    GroupBills.hasMany(GroupMemberBills, { foreignKey: 'group_bill_id' })
    GroupMembers.hasMany(GroupMemberBills, { foreignKey: 'group_member_id' })
}

module.exports = { createRelationships }