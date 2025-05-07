import axios from 'axios';

export const getAllProducts= async()=>{
    try {
       return await axios.get( `${import.meta.env.VITE_API_BASE_URL}/api/v1/product`)
    } catch (error) {
        throw error;
    }
}