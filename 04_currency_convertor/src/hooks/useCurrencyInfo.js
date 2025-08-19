import { useEffect, useState } from "react"
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        (async () => {
            let res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            let data = await res.json();
            setData(data[currency])
        })();
    }, [currency])

    return data;
}
export default useCurrencyInfo;