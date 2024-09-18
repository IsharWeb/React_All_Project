import React from 'react'
import useCurrencyHooks from '../hooks/useCurrencyHooks'
import { useState } from 'react'
import CurrencyInput from './CurrencyInput'
function CurrencyFun() {
   
    const [amoute, setAmoute] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('rs')
    const [convertedAmount, setConvertedAmount] = useState(0)


    const currencyHook = useCurrencyHooks(from)

    const options = Object.keys(currencyHook)

    const swafFunction = () => {
        setFrom(to)
        setTo(from)
        setAmoute(convertedAmount)
        setConvertedAmount(amoute)
    }
    

    const convert = () => {
        
        setConvertedAmount(amoute * currencyHook[to])

    }


  return (
<div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-black"
            >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                        >
                        <div className="w-full mb-1">
                            <CurrencyInput
                                label="From"
                                amoute={amoute}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setAmoute(amoute)}
                                selectCurrency={from}
                                onAmountChange={(amoute) => setAmoute(amoute)} 
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onChange={swafFunction}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <CurrencyInput
                                label="To"
                                amoute={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={from}
                                amountDisable
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default CurrencyFun