import { useEffect, useState } from 'react'
import { API_URL } from '../config';

const useResturantList = () => {
    const [resList, setResList] = useState([]);
    const [filterResturant, setFilterResturant] = useState([])
    useEffect(() => {
        const fetchResturant = async () => {
            try {
                const response = await fetch(API_URL)
                if (!response) {
                    throw new Error();
                }
                const data = await response.json();
                setResList(data.products)
                setFilterResturant(data.products)
            } catch (error) {
                console.log('Error fetching restaurant data:', error);
            }
        }
        fetchResturant();
    }, []);

    const updateFilterResturant = (data) => {
        setFilterResturant(data)
    }

    return { resList, filterResturant, updateFilterResturant }
}

export default useResturantList