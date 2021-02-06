module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define('Groups', {
        group_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        //creator_id FK
        disabled: {
            type: Sequelize.BOOLEAN
        }
    });


    return Group;
};