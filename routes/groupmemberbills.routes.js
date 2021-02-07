const GroupMemberBillsController = require('../api/controllers/groupmemberbills/groupmemberbills.controller.js')
const controller = new GroupMemberBillsController();

module.exports = (app) => {

    let router = require("express").Router();

    router.get("/", controller.findAll);

    router.post("/", controller.createGroupMemberBill);

    router.put('/', controller.update);

    router.get('/group-bill/:id', controller.findByGroupBillId);

    app.use('/api/groupmemberbills', router);

}