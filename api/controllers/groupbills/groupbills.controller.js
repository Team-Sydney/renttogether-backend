const db = require('../../../sequelize');
const GroupBill = db.GroupBills;

class GroupBillController {
    createGroupBill(req, res) {
        //Validate group id and at least one type of bill.
        //Revise groupBill data
        const groupBill = {
            sid: req.body.sid,
            name: req.body.name
        };

        GroupBill.create(sample)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while creating the group bill."
                });
            });
    }

    findOne(req, res) {
        const id = req.params.id;

        GroupBill.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unfortunately we were unable to retrieve this group of bills."
                });
            });
    }

    findAll(req, res) {
        GroupBill.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Unfortunately we were unable to retrieve all group of bills.'
                });
            });
    }

    update(req, res) {
        const id = req.params.id;

        GroupBill.update(req.body, {
                where: { catid: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The group of bills has been updated successfully"
                    });
                } else {
                    res.send({
                        message: "Unfortunately this group of bills could not be found, please double check the ID."
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unable to delete this group of bills."
                })
            })
    }

    delete(req, res) {
        const id = req.params.id;

        GroupBill.destroy({
                where: { catid: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The group of bills was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: "Unfortunately this group of bills could not be found, please double check the ID."
                    });
                }
            })
            .catch(err => {
                console.log(id)
                res.status(500).send({
                    message: "Unable to delete this group of bills."
                })
            })
    }
}

module.exports = GroupBillController;