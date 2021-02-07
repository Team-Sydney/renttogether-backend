module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define('Clients', {
        client_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        profileURL: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
        },
        registrationToken: {
            type: Sequelize.STRING,
        }
    });

    return Client;
};