import React, { useEffect, useState } from 'react'

const useFetch = () => {

    const[data,setData] = useState([]);
    const[isloading,setisloading]

    const getData = async()=>{
        const response = await fetch(url)
        const result = await response.json();
        setData(result);
    }

    useEffect(()=>{
        (async()=>{
            const response = await fetch(url)
            const result = await response.json();
            setData(result);
        } catch (err){
            console.log(err);   
        }
    })();

    },[url]);

    return {data};
};

export default useFetch