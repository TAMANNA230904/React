import React,{useId} from 'react'
//useId is a react hook for generating unique IDs that can be passed to accessiblity attributes
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    
    className = "",
}) {
   
const amountInputId=useId()  //for optimization
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                   value={selectCurrency}
                   onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                   disabled={currencyDisable}
                    
                >
                    //Remember to give key in loops
                       {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                       ))}
                
                </select>
            </div>
        </div>
    );
}
//when making so many components make another file index.js and export all components from there
export default InputBox;
