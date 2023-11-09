// services/api.js
import axios from 'axios';

// Configura una instancia de axios con una URL base y posibles configuraciones globales
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia esto por la URL de tu backend
  // Aquí podrías añadir headers que sean comunes para todas las llamadas, como tokens de autenticación
});

// Productos
export const getProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await apiClient.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await apiClient.post('/products', productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Carritos
export const getCart = async (userId) => {
  try {
    const response = await apiClient.get(`/carts/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addItemToCart = async (userId, itemId) => {
  try {
    const response = await apiClient.post(`/carts/${userId}/items`, { itemId });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeItemFromCart = async (userId, itemId) => {
  try {
    const response = await apiClient.delete(`/carts/${userId}/items/${itemId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ... y así sucesivamente para cada acción que quieras realizar con tu API.
