
module.exports = (plaidClient, clientId) => {

    return new Promise((resolve, reject) => {
        plaidClient.createLinkToken({
            user: {
                client_user_id: clientId
            },
            client_name: "Finance App",
            products: ['auth', 'transactions', 'assets'],
            country_codes: ['CA'],
            language: 'en'
        },
        (err, resLink) => {
            if (err) {
                reject(err);
            } else {
                resolve(resLink);
            }
        });
    });

}