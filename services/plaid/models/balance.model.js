class Balance {
    constructor(
        accountId, 
        available,
        officialName,
        type,
        subtype
    ) {
      this.accountId = accountId;
      this.available = available;
      this.officialName = officialName;
      this.type = type;
      this.subtype = subtype;
    }
}

module.exports = {
    Balance: Balance
}
