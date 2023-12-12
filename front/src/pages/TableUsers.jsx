import React, {useState} from 'react'
import { Table, Modal, Button } from 'react-bootstrap';

const Tablausers = ({ data, loading, error, getUser }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const handleDetail = async (id) => {
        try {
            const userData = await getUser(id);
            setSelectedProduct(userData);
            setShowModal(true);
        } catch (error) {
            console.error('Error al obtener detalles del producto:', error);

        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>

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
                                <Button variant='secondary' size='sm' onClick={()=>handleDetail(user.id)}>Detalles</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct ? (
                        <div>
                            <h4>Nombre completo: {selectedProduct.first_name} {selectedProduct.last_name}</h4>
                            <p>{selectedProduct.email}</p>

                        </div>
                    ) : (
                        <p>Cargando detalles del producto...</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Tablausers