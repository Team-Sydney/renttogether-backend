const GroupController = require('../api/controllers/groups/group.controller.js');
const controller = new GroupController();

module.exports = (app) => {

  let router = require("express").Router();

  router.post("/", controller.createGroup);

  router.get("/:id", controller.findOne)

  router.get("/", controller.findAll)

  router.put("/:id", controller.update)

  router.delete("/:id", controller.delete)

  app.use('/api/samples', router)
}