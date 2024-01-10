import { useEffect, useState } from "react"

const useFetch =  (url)=>{
    //to fetch data from an api 
    const [data,setData] = useState(null)
    useEffect(()=>{
        //make call
         fetch(url).then((res)=>{
            res.json().then(data=>setData(data.products))
         })
    },[url])
    return data
}

export default useFetch;