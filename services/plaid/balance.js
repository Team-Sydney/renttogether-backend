const { Balance } = require('./models/balance.model');

module.exports = (plaidClient, accessToken) => {

    return new Promise((resolve, reject) => {

        plaidClient.getBalance(
            accessToken,
            {},
            (err, resBal) => {
                if (err) {
                    reject(err);
                } else {
                    const fullAccountList = resBal.accounts;
                    const simpleAccountList = [];
                    fullAccountList.forEach((acc) => {
                        const balance = new Balance(
                            acc.account_id,
                            acc.balances.available,
                            acc.official_name,
                            acc.type,
                            acc.subtype
                        );
                        simpleAccountList.push(balance);
                    });
                    resolve(simpleAccountList);
                }
            }
        )

    });

}