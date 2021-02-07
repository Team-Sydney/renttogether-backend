const { Client } = require('plaid');
const db = require('../../../sequelize');
const Group = db.Groups;
const GroupMember = db.GroupMembers;
const UserClient = db.Clients;

class GroupController {
    createGroup(req, res) {
        const group = {
            name: req.body.name,
            creator_id: req.body.creator_id,
            disabled: req.body.disabled
        };
        
        Group.create(group)
            .then(data => {;
                // Add group owner to the group as well
                GroupMember.create({
                    group_id: data.group_id,
                    client_id: data.creator_id
                })

                res.send(data);


            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while creating the group."
                });
            });
    }

    findGroupByOwnerId(req, res) {
        const id = req.params.id;

        console.log("ID:" + id)
        Group.findOne({ 
            where: { creator_id: id }
          })
          .then(group => {
            return Group.findOne({
                where: { creator_id: id },
                include: [{
                model: GroupMember,
                where: { group_id: group.group_id },
                required: false,
                include: [{
                    model: UserClient
                    }]
                }]
            })
        })
          .then(data => {
            console.log(data)
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || 'Unfortunately we were unable to retrieve all Customers for this business.'
            });
        });
    }
        


    async findGroupByClientId(req, res) {
        const id = req.params.id;

        const groupMembers = await GroupMember.findOne({ where: { client_id: id }});

        console.log(groupMembers)
        Group.findOne({where: { group_id: groupMembers.group_id }})
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unfortunately we were unable to retrieve this group."
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