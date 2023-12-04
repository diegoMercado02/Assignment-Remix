import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CurrencyDropdown from '../components/CurrencyDropdown';
import RoundedLinkButton from '~/components/button';

const apiUrl = 'https://currency-exchange.p.rapidapi.com';

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const params = useParams<{ toCurrency: string; amount: string }>();

  useEffect(() => {
    // Fetch currencies from the API
    fetch(`${apiUrl}/listquotes`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
        'X-RapidAPI-Key': '51718725bdmshd55cc7a4537be62p19d336jsnf99a16b27253',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Set currencies directly since the response is an array of strings
        setCurrencies(data);
      });
  }, []);

  useEffect(() => {
    // Fetch exchange rate when currencies or amount change
    fetch(`${apiUrl}/exchange?from=${fromCurrency}&to=${toCurrency}&q=${amount}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
        'X-RapidAPI-Key': '51718725bdmshd55cc7a4537be62p19d336jsnf99a16b27253',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setExchangeRate(data);
      });
  }, [fromCurrency, toCurrency, amount]);

  const handleConvert = () => {
    // Handle conversion logic here
    if (exchangeRate !== null) {
      console.log(`Converted amount: ${amount * exchangeRate}`);
    }
  };

  // Create the link to the converter page with parameters
  const converterLink = `/currency-converter/from=${fromCurrency}&to=${toCurrency}&q=${amount}`;

  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencyDropdown
        currencies={currencies}
        selectedCurrency={fromCurrency}
        onSelectCurrency={setFromCurrency}
      />
      <CurrencyDropdown
        currencies={currencies}
        selectedCurrency={toCurrency}
        onSelectCurrency={setToCurrency}
      />
      <div className="flex flex-col mb-4">
        <label htmlFor="amount" className="mb-2">
          Enter Amount:
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>
        {/* Use Link to navigate to the result page with parameters */}
      <RoundedLinkButton to={"`/currency-converter/from=${fromCurrency}&to=${params.toCurrency}&q=${params.amount}`"}>Convert</RoundedLinkButton>

    </div>
  );
}

export default CurrencyConverter;
