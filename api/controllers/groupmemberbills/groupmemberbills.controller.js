const db = require('../../../sequelize');
const GroupMemberBill = db.GroupMemberBills;


class GroupMemberBillsController { 

    findAll(req, res) {
        const id = req.params.id;

        GroupMemberBill.findAll({})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Unfortunately we were unable to retrieve all member bills of this group.'
                });
            });
    }

    createGroupMemberBill(req, res) {
        const groupMemberBill = {
            group_member_id: req.body.group_member_id,
            group_bill_id: req.body.group_bill_id,
            paid: false
        };
        
        GroupMemberBill.create(groupMemberBill)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while creating the group."
                });
            });
    }

    update(req, res) {
        const id = req.body.group_member_bill_id;

        GroupMemberBill.update(req.body, {
                where: { group_member_bill_id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The group member bill has been updated successfully"
                    });
                } else {
                    res.send({
                        message: "Unfortunately this group could not be found, please double check the ID."
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unable to delete this group."
                })
            })
    }

    findByGroupBillId(req, res) {
        const groupBillId = req.params.id;
        GroupMemberBill.findAll({
            where: {
                group_bill_id: groupBillId
            }
        })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Unfortunately we were unable to retrieve all member bills of this group.'
                });
            });
    }

}

module.exports = GroupMemberBillsController;