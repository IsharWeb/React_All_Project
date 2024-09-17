import {useState , useEffect} from 'react'

function useCurrencyHooks(currency) {
    const [apiData, setapiData] = useState({})

    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        
        url.then((data) => data.json())
        .then((data) => setapiData(data[currency]))
    },[currency])

    return apiData
}

export default useCurrencyHooks