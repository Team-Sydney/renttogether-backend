// #####################################################
// Integration for the Plaid NodeJS SDK
// #####################################################
const plaid = require('plaid');
const chalk = require('chalk');

// Setup variables
let plaidTestToken = null
let plaidEnv = null

// Determine if Plaid test access token is being used
if (TestTokenInUse()) {
    plaidTestToken = process.env.PLAID_TEST_TOKEN;
    console.log(
        `${chalk.yellow('Plaid Running Test Access Token:')} ${plaidTestToken}`
    )
}

// Select enviroment for the Plaid SDK instance
switch(process.env.PLAID_ENV) {
    case "sandbox":
        plaidEnv = plaid.environments.sandbox
        break;
    case "development":
        plaidEnv = plaid.environments.development
        break;
}

// Initialize a top level Plaid SDK instance
const plaidClient = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_SECRET,
    env: plaidEnv,
    options: {
        version: '2020-09-14'
    },
});

// Function to see if Plaid instance is using a provided access token
function TestTokenInUse() {
    if (process.env.PLAID_TEST_TOKEN != "" && process.env.PLAID_TEST_TOKEN != null) {
        return true
    } else {
        return false;
    }
}

module.exports = {

    requestTransaction(access_token, params) {
        if (TestTokenInUse) {
            return require('./transactions.js')(plaidClient, plaidTestToken, params);
        } else {
            return require('./transactions.js')(plaidClient, access_token, params);
        }
    },

    requestBalance(access_token) {
        if (TestTokenInUse) {
            return require('./balance.js')(plaidClient, plaidTestToken);
        } else {
            return require('./balance.js')(plaidClient, access_token);
        }
    }

}