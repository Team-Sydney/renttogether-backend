const db = require('../../../sequelize');
const CustomBill = db.CustomBills;

class CustomBillController {
    createCustomBill(req, res) {
        const customBill = {
            bill_name: req.body.bill_name
        };

        CustomBill.create(customBill)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while creating the custom bill."
                });
            });
    }

    findOne(req, res) {
        const id = req.params.id;

        CustomBill.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unfortunately we were unable to retrieve this custom bill."
                });
            });
    }

    findAll(req, res) {
      CustomBill.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Unfortunately we were unable to retrieve all custom bills.'
                });
            });
    }

    update(req, res) {
        const id = req.params.id;

        CustomBill.update(req.body, {
                where: { custom_bill_id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The custom bill has been updated successfully"
                    });
                } else {
                    res.send({
                        message: "Unfortunately this custom bill could not be found, please double check the ID."
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unable to delete this custom bill."
                })
            })
    }

    delete(req, res) {
        const id = req.params.id;

        CustomBill.destroy({
                where: { custom_bill_id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The custom bill was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: "Unfortunately this custom bill could not be found, please double check the ID."
                    });
                }
            })
            .catch(err => {
                console.log(id)
                res.status(500).send({
                    message: "Unable to delete this custom bill."
                })
            })
    }
}

module.exports = CustomBillController;