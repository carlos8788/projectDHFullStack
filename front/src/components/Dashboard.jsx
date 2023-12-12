import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useProducts } from '../hooks/useProducts';
import { useUsers } from '../hooks/useUsers';
import { useCarts } from '../hooks/useCarts';

export const Dashboard = () => {
    const {
        categories,
        products,
        loading,
        error,
        read,
        refreshProducts
    } = useProducts();

    const {
        users,
        loadingUsers,
        errorUsers,
        readUsers,
        refreshUsers
    } = useUsers();


    const { carts, loadingCart, errorCart, readCart, refreshCarts } = useCarts();
    console.log(products)

    return (
        <Container fluid bg="secondary" className="p-4 mt-5">
            <Row>
                <Col md={4} className="mb-4">
                    <Card bg="danger" text="white">
                        <Card.Header>Usuarios</Card.Header>
                        <Card.Body>
                            <Card.Title>Datos de Usuarios</Card.Title>

                            {loadingUsers && <div>Cargando usuarios...</div>}
                            {errorUsers && <div>Error: {errorUsers.message}</div>}
                            <ul>
                                {users.map((user, index) => (
                                    <li key={index}>{user.name} - {user.email}</li>
                                ))}
                            </ul>

                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card bg="secondary" text="white">
                        <Card.Header>Carritos</Card.Header>
                        <Card.Body>
                            <Card.Title>Datos de Carritos</Card.Title>
                            {loadingCart && <div>Cargando usuarios...</div>}
                            {errorCart && <div>Error: {errorCart.message}</div>}
                            <ul>
                                {carts.map((cart, index) => (
                                    <li key={index}>ID user: {cart.id_user} - ID cart: {cart.id_cart} - Total: {cart.total_price}</li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card bg="info" text="white">
                        <Card.Header>Productos</Card.Header>
                        <Card.Body>
                            <Card.Title>Datos de Productos</Card.Title>
                            {loading && <div>Cargando productos...</div>}
                            {error && <div>Error: {error.message}</div>}
                            <ul>
                                {products.map((product, index) => (
                                    <li key={index}>{product.name_product} - {product.price}</li>
                                ))}
                            </ul>
                        </Card.Body>
                        <Card.Footer>
                            <ul>
                                <li>Cantidad de productos: {products.length}</li>
                                <li>Cantidad de categorias: {categories}</li>
                            </ul>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
