import { useState, useCallback, useEffect } from 'react';
import { getUsers, getUserById } from '../services/apiUsers'; 

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const refreshUsers = useCallback(async () => {
        setLoading(true);
        try {
            const data = await getUsers();
            setUsers(data);
            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        refreshUsers();
    }, [refreshUsers]);

    const read = useCallback(async (id) => {
        setLoading(true);
        try {
            return await getUserById(id);
        } catch (error) {
            setError(error);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);



    return { users, loading, error, read, refreshUsers };
};
