import { useState, useCallback, useEffect } from 'react';
import { getCarts, getCart } from '../services/apiCarts';

export const useCarts = () => {
    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const refreshCarts = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getCarts();
            setCarts(data);
            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refreshCarts();
    }, [refreshCarts]);

    const readCart = useCallback(async (userId) => {
        setLoading(true);
        try {
            const data = await getCart(userId);
            return data; 
        } catch (error) {
            setError(error);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    return { carts, loading, error, readCart, refreshCarts };
};
