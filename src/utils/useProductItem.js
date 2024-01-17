import { useEffect, useState } from 'react'
import { API_URL } from '../config';


const useProduct = (id) => {
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const getProductInfo = async () => {
            try {
                const response = await fetch(`${API_URL}${id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                console.log("API Response:", data);

                if (data && data.id) {
                    // Ensure that the response has an 'id' property
                    setProductDetails(data);
                } else {
                    console.error(`Error: Product with ID ${id} not found in the response`);
                }
            } catch (error) {
                console.log("Error fetching product details:", error);
            }
        };
        getProductInfo();
    }, [id]);

    return productDetails
}

export default useProduct