import React from "react";
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "eur",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",

}) {
  
  
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg  text-sm flex${className}`}>
      <div className="w-1/2">
        <label
          className="text-black/40 mb-2 inline-block"
          htmlFor={amountInputId}
        >
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(event) =>
            onAmountChange && onAmountChange(Number(event.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        Currency Type{" "}
        <p>
          <select
            name=""
            id=""
            value={selectedCurrency}
            onChange={(event) => {
              oncuechange && oncuechange(event.target.value);
            }}
            disabled={currencyDisabled}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </p>
      </div>
    </div>
  );
}

export default InputBox;
