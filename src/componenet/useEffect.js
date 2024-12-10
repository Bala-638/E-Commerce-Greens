import { useEffect, useState } from "react";

export default function useEffect_function(link){

        const [data,setData] = useState(null);

        useEffect(() =>{
            fetch(link)
            .then(response => response.json())
            .then(data => setData(data))
        },[])

        return [data];

}