module.exports = (plaidClient, access_token) => {
    
    const start_date = "2021-01-01"
    const end_date = "2021-01-10"
    return new Promise((resolve, reject) => {
        plaidClient.getTransactions(
            access_token, 
            start_date, 
            end_date, 
            {}, // Options
            (err, resTrans) => { // Callback
                if (err) {
                    reject(err);
                } else {
                    resolve(resTrans.transactions);
                }
            }
        );
    })
}