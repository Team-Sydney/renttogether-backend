const CustomBillController = require('../api/controllers/custombills/custombills.controller.js');
const { check, validationResult } = require("express-validator");

const controller = new CustomBillController();

module.exports = (app) => {

  let router = require("express").Router();

  router.post(
    "/",
    [
      check("bill_name")
        .isLength({min: 3, max: 50})
        .withMessage("The bill name must have a minimum length of 3 characters and can only have a maximum of 50 characters.")
        .trim()
    ],
    (req, res, next) => {
      const error = validationResult(req).formatWith(({ msg }) => msg);
      const hasError = !error.isEmpty();

      if(hasError) {
          res.status(422).json({ error: error.array() });
      } else {
        next();
      }
    },
    controller.createCustomBill
  );

  router.get(
    "/:id",
    check('id').exists(),
    controller.findOne
  );

  router.get(
    "/", 
    controller.findAll
  )

  router.put(
    "/:id",
    controller.update
  );

  router.delete(
    "/:id",
    controller.delete
  );

  app.use('/api/custombills', router)
}