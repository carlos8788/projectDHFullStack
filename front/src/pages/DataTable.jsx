import React from 'react';
import { Table, Dropdown, DropdownButton } from 'react-bootstrap';
import { useProducts } from '../hooks/useProducts';
// import { useCarts } from '../hooks/useCarts'; // Asumiendo que tienes hooks similares para carritos y usuarios
// import { useUsers } from '../hooks/useUsers';

const DataTable = ({ dataType }) => {

    let data = [];
    let loading = true;
    let error = null;

    if (dataType === 'products') {
        const { products, loading: productsLoading, error: productsError, create, read, update, remove, refreshProducts } = useProducts();
        data = products
    } else if (dataType === 'carts') {
        ({ data, loading, error } = useCarts());
    } else if (dataType === 'users') {
        ({ data, loading, error } = useUsers());
    }
    console.log(data)
    // if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    // Funciones para manejar la eliminación y edición
    const handleDelete = (id) => {
        console.log('Eliminar producto con ID:', id);
        // Aquí podrías llamar a una función para eliminar el producto
    };

    const handleEdit = (id) => {
        console.log('Editar producto con ID:', id);
        // Aquí podrías redirigir al usuario a un formulario de edición
    };
    // Renderiza los datos de la tabla aquí
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Categoría</th>
                    <th>Color</th>
                    <th>Tamaño</th>
                    <th>Marca</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.map(product => (
                    <tr key={product.id_product}>
                        <td>{product.id_product}</td>
                        <td>{product.name_product}</td>
                        <td>{product.description}</td>
                        <td>${product.price.toFixed(2)}</td>
                        <td>{product.stock}</td>
                        <td>{product.category}</td>
                        <td>{product.color}</td>
                        <td>{product.size}</td>
                        <td>{product.brand}</td>
                        <td>
                            <DropdownButton id="dropdown-item-button" title="Acciones" size="sm" variant='secondary'>
                                <Dropdown.Item as="button" onClick={() => handleEdit(product.id_product)}>Editar</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => handleDelete(product.id_product)}>Eliminar</Dropdown.Item>
                            </DropdownButton>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default DataTable;
