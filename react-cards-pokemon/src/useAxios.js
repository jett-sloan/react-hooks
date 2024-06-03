import {useState,useEffect} from 'react';
import axios from 'axios';
export function useAxios(url){
    const [data , setData] = useState([])
    async function fetchData(){
        const response = await axios.get(url)
        setData(response.data)
    }
    useEffect(()=>{
        fetchData()

    },[url])
    return [data , fetchData]
}