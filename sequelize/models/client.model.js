module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define('Clients', {
        client_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    });

    return Client;
};