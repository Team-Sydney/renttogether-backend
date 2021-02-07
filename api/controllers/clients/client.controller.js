const db = require('../../../sequelize');
const Client = db.Clients;

class ClientController {
    createClient(req, res) {
        const client = {
            client_id: req.body.uid,
            email: req.body.email,
            registrationToken: req.body.registrationToken
        };

        Client.upsert(client)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while creating the client."
                });
            });
    }

    findOne(req, res) {
        const id = req.params.id;

        Client.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unfortunately we were unable to retrieve this client."
                });
            });
    }

    findAll(req, res) {
        Client.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Unfortunately we were unable to retrieve all clients.'
                });
            });
    }

    update(req, res) {
        const id = req.params.id;

        Client.update(req.body, {
                where: { client_id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The client has been updated successfully"
                    });
                } else {
                    res.send({
                        message: "Unfortunately this client could not be found, please double check the ID."
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unable to delete this client."
                })
            })
    }

    delete(req, res) {
        const id = req.params.id;

        Client.destroy({
                where: { client_id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The client was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: "Unfortunately this client could not be found, please double check the ID."
                    });
                }
            })
            .catch(err => {
                console.log(id)
                res.status(500).send({
                    message: "Unable to delete this client."
                })
            })
    }
}

module.exports = ClientController;