const db = require('../../../models');
const Sample = db.Samples;

class SampleController {
  createSample(req, res) {

    if(!req.body.name) {
      res.status(400).send({
        message: "Please enter the name of the sample."
      });
      return;
    }

    const sample = {
      sid: req.body.sid,
      name: req.body.name
    };

    Sample.create(sample)
      .then(data => {
        res.send(data);
      }) 
      .catch(err => {
        res.status(500).send({
          message: 
            err.message || "An error occurred while creating the sample."
        });
      });
  }

  findOne(req, res) {
    const id = req.params.id;

    Sample.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Unfortunately we were unable to retrieve this sample."
        });
      });
  }

  findAll(req, res) {
    Sample.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || 'Unfortunately we were unable to retrieve all samples.'
        });
      });
  }

  update(req, res) {
    const id = req.params.id;

    Sample.update(req.body, {
      where: { catid: id }
    })
      .then(num => {
        if(num == 1) {
          res.send({
            message: "The sample has been updated successfully"
          });
        } else {
          res.send({
            message: "Unfortunately this sample could not be found, please double check the ID."
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Unable to delete this sample."
        })
      })
  }

  delete(req, res) {
    const id = req.params.id;

    Sample.destroy({
      where: { catid: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "The sample was deleted successfully!"
          });
        } else {
          res.send({
            message: "Unfortunately this sample could not be found, please double check the ID."
          });
        }
      })
      .catch(err => {
        console.log(id)
        res.status(500).send({
          message: "Unable to delete this sample."
        })
      })
  }
}

module.exports = SampleController;