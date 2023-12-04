import React from 'react';

function CurrencyDropdown({
  currencies,
  selectedCurrency,
  onSelectCurrency,
  labelText // Add this new prop
}: {
  currencies: string[],
  selectedCurrency: string,
  onSelectCurrency: (currency: string) => void,
  labelText: string // Declare the new prop here
}) {
  return (
    <div className="flex flex-col w-full text-left">
      <label htmlFor="currency" className="mb-2">
        {labelText} {/* Use the labelText prop here */}
      </label>
      <select
        id="currency"
        value={selectedCurrency}
        onChange={(e) => onSelectCurrency(e.target.value)}
        className="text-black font-semibold rounded-xl bg-purple-100 py-3 px-4 shadow-lg hover:shadow-lg focus:outline-none focus:ring focus:border-purple-300"
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
