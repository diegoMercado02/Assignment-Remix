import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CurrencyDropdown from '../components/CurrencyDropdown';

const apiUrl = 'https://currency-exchange.p.rapidapi.com';
const headers = {
  'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
  'X-RapidAPI-Key': '51718725bdmshd55cc7a4537be62p19d336jsnf99a16b27253' // Replace with your actual API key
};

function CurrencyConverter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState(searchParams.get('from') || 'USD');
  const [toCurrency, setToCurrency] = useState(searchParams.get('to') || 'EUR');
  const [amount, setAmount] = useState(Number(searchParams.get('q')) || 1);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  // Fetch list of currencies on component mount
  useEffect(() => {
    fetch(`${apiUrl}/listquotes`, { method: 'GET', headers })
      .then(response => response.json())
      .then(data => setCurrencies(data));
  }, []);

   // Function to handle conversion
   const performConversion = (fromCurrency: string, toCurrency: string, amount: number) => {
    fetch(`${apiUrl}/exchange?from=${fromCurrency}&to=${toCurrency}&q=${amount}`, { method: 'GET', headers })
      .then((response) => response.json())
      .then((conversionRate) => {
        if (!isNaN(conversionRate) && !isNaN(amount)) {
          const totalConvertedAmount = conversionRate * amount;
          setConvertedAmount(totalConvertedAmount);
        } else {
          console.error('Invalid conversion rate or amount');
          setConvertedAmount(null);
        }
      })
      .catch((error) => {
        console.error('Error fetching conversion data:', error);
        setConvertedAmount(null);
      });
  };

    // Trigger conversion on component mount and when query params change
    useEffect(() => {
        performConversion(fromCurrency, toCurrency, amount);
    }, [fromCurrency, toCurrency, amount]);

    // Function to handle conversion and URL update on button click
    const handleConvert = () => {
        performConversion(fromCurrency, toCurrency, amount);
        // Update the URL with the new query parameters
        const newParams = { from: fromCurrency, to: toCurrency, q: amount.toString() };
        setSearchParams(newParams);
    };
  
  

  return (
    <div className='bg-gradient-to-b from-indigo-700 to-purple-400 p-8 text-white flex flex-col justify-center items-center text-center gap-8 h-screen'>
        <div className='flex flex-col gap 6'>
            <h1 className='text-4xl font-semibold'>Currency Converter</h1>
            <p>Check live foreign currency exchange rates</p>
        </div>

        <div className='flex flex-row bg-gradient-to-b from-indigo-700 to-purple-400 py-4 px-8 rounded-xl'>
            <div>
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
                className="text-black p-2 border border-gray-300 rounded-md"
                />
            </div>
        </div>
        <button
            className="bg-purple-700 text-white p-2 rounded-md cursor-pointer"
            onClick={handleConvert}
        >
            Convert
        </button>
        {convertedAmount !== null && !isNaN(convertedAmount) && (
            <div className="mt-4">
            <p>Converted Amount: {convertedAmount.toFixed(6)}</p>
            </div>
        )}
        </div>

    
    </div>
  );
}

export default CurrencyConverter;
