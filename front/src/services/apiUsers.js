import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/users',
});

// Productos
export const getUsers = async () => {
  try {
    const response = await apiClient.get('/');
    console.log(response.data.users);
    return response.data.users;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserById = async (userID) => {
  try {
    const response = await apiClient.get(`/${userID}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};