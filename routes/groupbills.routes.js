const GroupBillController = require('../api/controllers/groupbills/groupbills.controller');
const controller = new GroupBillController();

module.exports = (app) => {

    let router = require("express").Router();

    router.post("/", controller.createGroupBill);

    router.get("/:id", controller.findOne)

    router.get("/", controller.findAll)

    router.put("/:id", controller.update)

    router.delete("/:id", controller.delete)

    app.use('/api/groupbills', router)
}