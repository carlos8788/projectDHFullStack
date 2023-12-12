import { useState, useCallback, useEffect } from 'react';
import {
    getProducts as fetchProducts,
    getProductById,
} from '../services/api';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const refreshProducts = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetchProducts();            
            setProducts(response.products);
            setCategories(response.categories);
            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refreshProducts();
    }, [refreshProducts]);


    const read = useCallback(async (id) => {
        setLoading(true);
        try {
            return await getProductById(id);
        } catch (error) {
            setError(error);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    return { categories, products, loading, error, read, refreshProducts };
};
