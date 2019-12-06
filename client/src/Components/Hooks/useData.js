import { useState, useEffect } from 'react';
import axios from 'axios';

//custom hook 

export const useData = () => {
// set state
    const [data, setData] = useState([]);
//fetch data with useEffect
    useEffect(() => {
        axios
            .get('http://localhost:5000/api/players')
            .then(response => {
                setData(response.data);
                // console.log(response.data);
            })
            .catch(error => console.log('Your data must have been kicked out of the stadium', error))
    }, [])

    return[data];

}