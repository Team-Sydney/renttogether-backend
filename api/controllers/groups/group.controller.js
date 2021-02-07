const db = require('../../../sequelize');
const Group = db.Groups;

class GroupController {
    createGroup(req, res) {
        const group = {
            name: req.body.name,
            creator_id: req.body.creator_id,
            disabled: req.body.disabled
        };
        
        Group.create(group)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while creating the group."
                });
            });
    }

    findOne(req, res) {
        const id = req.params.id;

        Group.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unfortunately we were unable to retrieve this group."
                });
            });
    }

    findAll(req, res) {
        Group.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Unfortunately we were unable to retrieve all groups.'
                });
            });
    }

    update(req, res) {
        const id = req.params.id;

        Group.update(req.body, {
                where: { group_id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The group has been updated successfully"
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

    delete(req, res) {
        const id = req.params.id;

        Group.destroy({
                where: { group_id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The group was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: "Unfortunately this group could not be found, please double check the ID."
                    });
                }
            })
            .catch(err => {
                console.log(id)
                res.status(500).send({
                    message: "Unable to delete this group."
                })
            })
    }
}

module.exports = GroupController;