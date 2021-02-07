module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define('Clients', {
        client_id: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        profileURL: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        registrationToken: {
            type: Sequelize.STRING,
        }
    });

    return Client;
};