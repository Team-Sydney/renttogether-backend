module.exports = (sequelize, Sequelize) => {
  const GroupMember = sequelize.define('GroupMembers', {
    group_member_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    //client_id FK
    //group_id FK
  });

 
  return GroupMember;
};

