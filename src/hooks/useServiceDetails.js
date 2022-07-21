import { useEffect, useState } from "react";

const useServiceDetails = serviceId => {
    const [service, setService] = useState({});

    useEffect( () =>{
        const url = `https://enigmatic-fortress-14313.herokuapp.com/service/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data));

    }, [serviceId]);
    return [service]
}

export default useServiceDetails;