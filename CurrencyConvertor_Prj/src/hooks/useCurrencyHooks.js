import { useState, useEffect } from 'react'

function useCurrencyHooks(currency) {

    const [apiData, setapiData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((data) => data.json())
            .then((data) => setapiData(data[currency]))
        console.log(apiData);

    }, [currency])
    console.log(apiData);


    return apiData
}

export default useCurrencyHooks