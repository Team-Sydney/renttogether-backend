const GroupBillController = require('../api/controllers/groupbills/groupbills.controller');
const controller = new GroupBillController();

const Multer = require('multer');

// Multer is required to process file uploads and make them available via
// req.files.
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
    },
  });

module.exports = (app) => {

    let router = require("express").Router();

    router.post("/", controller.createGroupBill);

    router.post("/uploadBill/:id", multer.single('file'), controller.uploadBillPDF);

    router.get("/:id", controller.findOne)

    router.get("/", controller.findAll)

    router.put("/:id", controller.update)

    router.delete("/:id", controller.delete)

    app.use('/api/groupbills', router)
}