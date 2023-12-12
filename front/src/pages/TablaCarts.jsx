import React, { useState } from 'react'
import { Table, Button, Modal } from 'react-bootstrap';

const TablaCarts = ({ data, loading, error, getCart }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const handleDetail = async (id) => {
        try {
            const cartData = await getCart(id);
            console.log(cartData)
            setSelectedProduct(cartData);
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
                        <th>Usuario</th>
                        <th>Total</th>
                        <th>Artículos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(cart => {
                        if (cart.cartDetails.length > 0) {
                            return (
                                <tr key={cart.id_cart}>
                                    <td>{cart.id_cart}</td>
                                    <td>{cart.id_user}</td>
                                    <td>{cart.total_price}</td>
                                    <td>{cart.cartDetails.length}</td>
                                    <td>
                                        <Button onClick={() => handleDetail(cart.id_cart)} variant='info' size='sm'>Detalles</Button>
                                    </td>
                                </tr>
                            );
                        }
                        return null; 
                    })}
                </tbody>
            </Table>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct ? (
                        <div>
                            <h4>ID CART: {selectedProduct.id_cart}</h4>
                            <p>User ID: {selectedProduct.id_user}</p>
                            <p>Total: {selectedProduct.total_price}</p>
                            <p>Cantidad: {selectedProduct.cartDetails.length}</p>

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

export default TablaCarts;
