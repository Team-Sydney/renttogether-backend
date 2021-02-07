const GroupMemberController = require('../api/controllers/groupmembers/groupmembers.controller.js');
const controller = new GroupMemberController();

module.exports = (app) => {

  let router = require("express").Router();

  router.post("/", controller.addGroupMember);

  router.get("/:id", controller.findOne)

  router.get("/all/:id", controller.findAll)

  router.delete("/:id", controller.delete)

  app.use('/api/groupmembers', router)
}