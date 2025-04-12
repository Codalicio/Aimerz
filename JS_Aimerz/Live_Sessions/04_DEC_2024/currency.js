const exchangeRates = {
  dollar: 84,
  euro: 89,
  pound: 107,
};

function CurrencyConverter(currencyToBeExchangedWith, units) {
  // check if the currency is supported
  if (!Object.keys(exchangeRates).includes(currencyToBeExchangedWith)) {
    return "The exchange is not supported for this currency.";
  }
  //   check if unit is 0 or negative
  if (units <= 0) {
    return "The exchange is not supported for zero or negative units.";
  }
  //   do the exchange and return the value
  return exchangeRates[currencyToBeExchangedWith] * units;
}

const output = CurrencyConverter("pound", 2);
console.log(output);
