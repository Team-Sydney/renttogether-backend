const { Client } = require("pg");

function createRelationships(sequelize) {
    const { Groups, Clients, GroupMembers } = sequelize.models;

    Groups.belongsToMany(Clients, { through: GroupMembers, foreignKey: 'group_id', otherKey: 'client_id' });


}

module.exports = { createRelationships }