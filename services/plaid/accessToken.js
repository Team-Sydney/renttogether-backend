module.exports = (plaidClient, publicToken) => {

    return new Promise((resolve, reject) => {

        plaidClient.exchangePublicToken(
            publicToken,
            (err, resExchange) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resExchange);
                }
            }
        )

    });

}