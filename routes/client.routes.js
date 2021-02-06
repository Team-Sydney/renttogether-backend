const ClientController = require('../api/controllers/clients/client.controller.js');
const controller = new ClientController();

module.exports = (app) => {

  let router = require("express").Router();

  router.post("/", controller.createClient);

  router.get("/:id", controller.findOne)

  router.get("/", controller.findAll)

  router.put("/:id", controller.update)

  router.delete("/:id", controller.delete)

  app.use('/api/clients', router)
}