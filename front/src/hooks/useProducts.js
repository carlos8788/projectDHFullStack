import { useState, useCallback, useEffect } from 'react';
import {
    getProducts as fetchProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById,
} from '../services/api';

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const refreshProducts = useCallback(async () => {
        setLoading(true);
        try {
            const data = await fetchProducts();
            setProducts(data);
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

    const create = useCallback(async (newProductData) => {
        setLoading(true);
        try {
            await createProduct(newProductData);
            await refreshProducts();
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
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

    const update = useCallback(async (id, updateData) => {
        setLoading(true);
        try {
            await updateProductById(id, updateData);
            await refreshProducts();
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [refreshProducts]);

    const remove = useCallback(async (id) => {
        setLoading(true);
        try {
            await deleteProductById(id);
            await refreshProducts();
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [refreshProducts]);

    return { products, loading, error, create, read, update, remove, refreshProducts };
};
