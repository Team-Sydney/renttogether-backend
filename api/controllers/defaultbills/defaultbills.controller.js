const db = require('../../../sequelize');
const DefaultBill = db.DefaultBills;

class DefaultBillController {
    createDefaultBill(req, res) {
        const defaultBill = {
            bill_name: req.body.bill_name
        };

        DefaultBill.create(defaultBill)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while creating the default bill."
                });
            });
    }

    // ***
    findOne(req, res) {
        const id = req.params.id;

        DefaultBill.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unfortunately we were unable to retrieve this default bill."
                });
            });
    }

    findAll(req, res) {
        DefaultBill.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Unfortunately we were unable to retrieve all default bills.'
                });
            });
    }

    // ***
    update(req, res) {
        const id = req.params.id;

        DefaultBill.update(req.body, {
                where: { bill_id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The default bill has been updated successfully"
                    });
                } else {
                    res.send({
                        message: "Unfortunately this default bill could not be found, please double check the ID."
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unable to delete this default bill."
                })
            })
    }

    // ***
    delete(req, res) {
        const id = req.params.id;

        DefaultBill.destroy({
                where: { bill_id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The default bill was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: "Unfortunately this default bill could not be found, please double check the ID."
                    });
                }
            })
            .catch(err => {
                console.log(id)
                res.status(500).send({
                    message: "Unable to delete this default bill."
                })
            })
    }
}

module.exports = DefaultBillController;