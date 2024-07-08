import React, { useEffect, useState } from "react";

const App = () => {
  const [exchangeRateData, setExchangeRateData] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [conversionRate, setConversionRate] = useState(null);
  const [amountToConvert, setAmountToConvert] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/d85475b116f76d7b8d856ee8/latest/${baseCurrency}`
    )
      .then((response) => response.json())
      .then((data) => setExchangeRateData(data));
  }, [baseCurrency]);

  const handleConversion = () => {
    if (exchangeRateData) {
      const rate = exchangeRateData.conversion_rates[targetCurrency];
      setConversionRate(rate);
      const converted = amountToConvert * rate;
      setConvertedAmount(converted);
    }
  };

  const handleAmountChange = (event) => {
    setAmountToConvert(event.target.value);
  };

  return (
    <div>
      <h1>Exchange Rate Converter</h1>
      <div>
        <label>
          Base Currency:
          <select
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
          >
            {exchangeRateData &&
              Object.keys(exchangeRateData.conversion_rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Target Currency:
          <select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            {exchangeRateData &&
              Object.keys(exchangeRateData.conversion_rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Amount to Convert:
          <input
            type="number"
            value={amountToConvert}
            onChange={handleAmountChange}
          />
        </label>
      </div>
      <button onClick={handleConversion}>Convert</button>
      {conversionRate && (
        <div>
          <h2>Conversion Rate</h2>
          <p>
            1 {baseCurrency} = {conversionRate} {targetCurrency}
          </p>
          <h2>Converted Amount</h2>
          <p>
            {amountToConvert} {baseCurrency} = {convertedAmount}{" "}
            {targetCurrency}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
