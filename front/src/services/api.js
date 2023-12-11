import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api',
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

export const updateProductById = async (productId, updateData) => {
  try {
    const response = await apiClient.put(`/products/${productId}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export const deleteProductById = async (productId) => {
  try {
    const response = await apiClient.delete(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
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


