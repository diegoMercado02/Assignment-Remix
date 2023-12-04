import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CurrencyDropdown from '../components/CurrencyDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLeft } from '@fortawesome/free-solid-svg-icons';


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

   // Function to handle conversion and URL update on button click
const handleConvert = () => {
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
  
        // Update the URL with the new query parameters
        const newParams = { from: fromCurrency, to: toCurrency, q: amount.toString() };
        setSearchParams(newParams);
      })
      .catch((error) => {
        console.error('Error fetching conversion data:', error);
        setConvertedAmount(null);
      });
  };
  
  
    // Function to swap the currencies
  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  

  return (
    <div className='bg-gradient-to-b from-indigo-600 to-purple-400 p-4 md:p-8 text-white flex justify-center items-center text-center h-screen gap-2 md:gap-4 flex-col w-full'>
        <div className='flex flex-col gap 6'>
            <h1 className='text-2xl md:text-4xl font-semibold'>Currency Converter</h1>
            <p>Check live foreign currency exchange rates</p>
        </div>

        <div className='flex flex-col bg-transparent py-4 px-4 md:px-8 rounded-xl w-full md:w-10/12 shadow-md'>
            <div className='flex flex-col md:flex-row gap-4 justify-evenly'>
            <div className="flex flex-col w-full text-left order-last md: order-first">
                <label htmlFor="amount" className="mb-2">
                Enter Amount:
                </label>
                <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                className=" text-black font-semibold rounded-xl bg-purple-100 py-3 px-4 shadow-lg hover:shadow-lg focus:outline-none focus:ring focus:border-purple-300"
                />
            </div>
                <CurrencyDropdown
                currencies={currencies}
                selectedCurrency={fromCurrency}
                onSelectCurrency={setFromCurrency}
                labelText='From:'
                 />
                <button 
                    onClick={handleSwapCurrencies} 
                    className="px-4  rounded-full"
                    aria-label="Swap currencies"
                >
                    <FontAwesomeIcon icon={faRightLeft} />
                </button>

                <CurrencyDropdown
                    labelText='To:'
                    currencies={currencies}
                    selectedCurrency={toCurrency}
                    onSelectCurrency={setToCurrency}
                />
        </div>
        <div className=" flex flex-col md:flex-row w-full mt-4 justify-between">

        {convertedAmount !== null && !isNaN(convertedAmount) && (

                <div>
                    <p> {amount} {fromCurrency} = <span className='text-xl md:text-2xl font-semibold'> {(convertedAmount).toFixed(6)} {toCurrency}</span></p>
                    <p>1.00 {toCurrency} = {(convertedAmount).toFixed(6)} {fromCurrency}</p>
                </div>


            )}
                        <button 
                className="mt-4 text-black font-semibold rounded-xl bg-purple-100 py-4 px-4 shadow-lg hover:shadow-lg focus:outline-none focus:ring focus:border-purple-300" 
                onClick={handleConvert}
                >
                Convert
                </button>
            </div>

        </div>

    
    </div>
  );
}

export default CurrencyConverter;
