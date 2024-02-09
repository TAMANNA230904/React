import {useEffect,useState} from "react"

function useCurrrencyInfo(currency){
    const [data,Setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json() ).then((res)=>Setdata(res[currency]))
        console.log(data);
    },[currency])
    console.log(data)
    return data
}

export default useCurrrencyInfo;