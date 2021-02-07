const db = require('../../../sequelize');
const uploadFile = require('../../../services/files/uploadFile');
const GroupBill = db.GroupBills;

class GroupBillController {
    createGroupBill(req, res) {
        //Validate group id and at least one type of bill.
        //Revise groupBill data
        const groupBill = {
            group_id: req.body.group_id,
            default_bill_id: req.body.default_bill_id,
            total_cost: req.body.total_cost,
            pdfBillRef: req.body.pdfBillRef,
            custom_bill_id: req.body.custom_bill_id
        };

        GroupBill.create(groupBill)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "An error occurred while creating the group bill."
                });
            });
    }

    uploadBillPDF(req, res) {
        const id = req.params.id;
    
        if (!req.file) {
          res.status(400).send('No file uploaded.');
          return;
        }
      
        // upload bill PDF
        uploadFile(req.file)
          .then(publicUrl => {
            // update bill PDF with file url
            GroupBill.update({ pdfBillRef: publicUrl }, {
              where: { group_bill_id: id }
            })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "The bill PDF has been updated successfully"
                });
              } else {
                res.status(400).send({
                  message: "Unfortunately this group bill could not be found, please double check the ID."
                });
              }
            })
          })
          .catch(err => {
            res.status(500).send({
              message: "Unable to update this group bill with the bill PDF."
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
                where: { group_bill_id: id }
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
                where: { group_bill_id: id }
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