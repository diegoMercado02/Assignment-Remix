import React from 'react';
import { useParams } from 'react-router-dom';

const ConversionResult: React.FC = () => {
    const { symbol, quantity } = useParams<{ symbol: string; quantity: string }>();

    return (
        <div>
            <h2>Conversion Result</h2>
            <p>
                Symbol: {symbol ?? 'N/A'}, Quantity: {parseFloat(quantity ?? '0').toFixed(6)}
            </p>
        </div>
    );
};

export default ConversionResult;
