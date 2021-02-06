const { Transaction } = require('./models/transaction.model');

module.exports = (plaidClient, accessToken, params) => {
    /*
        params: {
            startDate: "YYYY-MM-DD"
            endDate: "YYYY-MM-DD"
        }
    */
    return new Promise((resolve, reject) => {
        plaidClient.getTransactions(
            accessToken, 
            params.startDate,
            params.endDate, 
            {}, // Options
            (err, resTrans) => { // Callback
                if (err) {
                    reject(err);
                } else {
                    const fullTransactionLog = resTrans.transactions;
                    const simpleTranactionList = [];
                    fullTransactionLog.forEach((entry) => {
                        const transaction = new Transaction(
                            entry.name,
                            entry.amount,
                            entry.date,
                            entry.payment_channel,
                            entry.account_id,
                            entry.iso_currency_code,
                            entry.transaction_id
                        );
                        simpleTranactionList.push(transaction);
                    })
                    resolve(simpleTranactionList);
                }
            }
        );
    })
}