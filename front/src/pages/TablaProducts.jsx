import React, { useState } from 'react'
import { Table, Modal, Button } from 'react-bootstrap';

const TablaProducts = ({ data, loading, error, getProductId }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const handleDetail = async (id) => {
        try {
            const productData = await getProductId(id);
            setSelectedProduct(productData);
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
                                <Button variant='secondary' size='sm' onClick={() => handleDetail(product.id_product)}>Detalles</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles del Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct ? (
                        <div>
                            <h4>{selectedProduct.name_product}</h4>
                            <p>{selectedProduct.description}</p>
                            <p>Color: {selectedProduct["color.name"]}</p>
                            <p>Categoria: {selectedProduct["category.name"]}</p>
                            <p>Precio: {selectedProduct.price}</p>
                            <p>Talle: {selectedProduct["size.name"]}</p>
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

export default TablaProducts