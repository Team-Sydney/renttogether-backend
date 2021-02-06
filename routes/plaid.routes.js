const plaid = require('../services/plaid/index');
const plaidInstance = require('../services/plaid/index');

module.exports = (app) => {

    let router = require("express").Router();

    router.get("/", (req, res) => {
        plaidInstance.requestTransaction(
            "access_token_string"
        )
        .then((response) => {
            res.send(response)
        })
        .catch((error) => {
            res.send(error)
        })
    });

    app.use('/api/plaid', router)

}