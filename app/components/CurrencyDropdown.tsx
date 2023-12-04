// CurrencyDropdown.js

import React from 'react';

function CurrencyDropdown({ currencies, selectedCurrency, onSelectCurrency }: { currencies: string[], selectedCurrency: string, onSelectCurrency: (currency: string) => void }) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="currency" className="mb-2">
        Select Currency:
      </label>
      <select
        id="currency"
        value={selectedCurrency}
        onChange={(e) => onSelectCurrency(e.target.value)}
        className="p-2 border border-gray-300 rounded-md"
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyDropdown;
