class Transaction {
    constructor(
        name, 
        amount, 
        date, 
        paymentChannel, 
        accountId, 
        currencyCode,
        transactionId
    ) {

      this.name = name;
      this.amount = amount;
      this.date = date; 
      this.paymentChannel = paymentChannel;
      this.accountId = accountId;
      this.currency_code = currencyCode;
      this.transactionId = transactionId
    
    }
}

module.exports = {
    Transaction: Transaction
}
