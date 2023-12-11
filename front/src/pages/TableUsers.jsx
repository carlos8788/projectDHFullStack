import React from 'react'
import { Table, Dropdown, DropdownButton, Button } from 'react-bootstrap';

const Tablausers = ({ data, loading, error }) => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    // Funciones para manejar la eliminación y edición
    const handleDelete = (id) => {
        console.log('Eliminar user con ID:', id);
        // Aquí podrías llamar a una función para eliminar el usero
    };

    const handleEdit = (id) => {
        console.log('Editar user con ID:', id);
        // Aquí podrías redirigir al usuario a un formulario de edición
    };
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Button variant='secondary' size='sm'>Detalles</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default Tablausers