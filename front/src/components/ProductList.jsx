import React from 'react';
import {useProducts} from '../hooks/useProducts';


export function ProductList() {
    const { products, loading, error } = useProducts();

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error al cargar los productos: {error.message}</p>;

    return (
        <div>
            <h1>Lista de Productos</h1>
            {products.map(product => (
                <div key={product.id_product}>
                    <h2>{product.name_product}</h2>
                    {/* Más detalles del producto */}
                </div>
            ))}
        </div>
    );
}

