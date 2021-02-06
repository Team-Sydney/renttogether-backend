const plaid = require('../services/plaid/index');
const plaidInstance = require('../services/plaid/index');

module.exports = (app) => {

    let router = require("express").Router();

    router.get("/transactions", (req, res) => {
        const START_DATE = req.query.start;
        const END_DATE = req.query.end;
        // Request Plaid for transaction history [Promise]
        plaidInstance.requestTransaction(
            "access_token_string",
            {
                startDate: START_DATE,
                endDate: END_DATE
            }
        )
        // Follow up on request response or error
        .then((response) => {
            res.send(response)
        })
        .catch((error) => {
            res.send(error)
        })
    });

    router.get("/balance", (req, res) => {
        plaidInstance.requestBalance("access_token")
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            res.send(error)
        })
    });

    app.use('/api/plaid', router)

}