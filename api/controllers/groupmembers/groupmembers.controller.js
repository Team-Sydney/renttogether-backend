const db = require('../../../sequelize');
const GroupMember = db.GroupMembers;
const Client = db.Clients;

class GroupMemberController {
    async addGroupCreator(req, res) {
      const groupMemberClient = await Client.findOne({ where: { client_id: req.body.creator_id }});

      GroupMember.create({ client_id: groupMemberClient.client_id, group_id: req.body.group_id })
          .then(data => {
              res.send(data);
          })
          .catch(err => {
              res.status(500).send({
                  message: err.message || "An error occurred while adding a group member."
              });
          });
    }

    async addGroupMember(req, res) {
        const groupMemberClient = await Client.findOne({ where: { email: req.body.email }});

        GroupMember.create({ client_id: groupMemberClient.client_id, group_id: req.body.group_id })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while adding a group member."
                });
            });
    }

    findOne(req, res) {
        const id = req.params.id;

        GroupMember.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Unfortunately we were unable to retrieve this member."
                });
            });
    }

    // find all members of a group by id
    findAll(req, res) {
        const id = req.params.id;

        GroupMember.findAll({
          where: {
            group_id: id
          }
        })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Unfortunately we were unable to retrieve all members of this group.'
                });
            });
    }

    delete(req, res) {
        const id = req.params.id;

        GroupMember.destroy({
                where: { group_member_id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "The member was removed from the group."
                    });
                } else {
                    res.send({
                        message: "Unfortunately this group member could not be found, please double check the ID."
                    });
                }
            })
            .catch(err => {
                console.log(id)
                res.status(500).send({
                    message: "Unable to remove this member from the group."
                })
            })
    }
}

module.exports = GroupMemberController;