const SampleController = require('../api/controllers/samples/sample.controller');
const controller = new SampleController();

module.exports = (app) => {

  let router = require("express").Router();

  router.post("/", controller.createSample);

  router.get("/:id", controller.findOne)

  router.get("/", controller.findAll)

  router.put("/:id", controller.update)

  router.delete("/:id", controller.delete)

  app.use('/api/samples', router)
}