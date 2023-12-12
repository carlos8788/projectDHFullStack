import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Carritos
export const getCart = async (userId) => {
    try {
      const response = await apiClient.get(`/carts/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const getCarts = async () => {
    try {
      const response = await apiClient.get(`/carts`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  