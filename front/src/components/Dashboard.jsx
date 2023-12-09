import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { useProducts } from '../hooks/useProducts';


export const Dashboard = () => {
    const { products, loading, error } = useProducts();
    return (
        <Container fluid bg="secondary" className="p-4 mt-5">
            <Row>
                <Col md={4} className="mb-4">
                    <Card bg="primary" text="white">
                        <Card.Header>Usuarios</Card.Header>
                        <Card.Body>
                            <Card.Title>Datos de Usuarios</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card bg="secondary" text="white">
                        <Card.Header>Carritos</Card.Header>
                        <Card.Body>
                            <Card.Title>Datos de Carritos</Card.Title>
                            <Card.Text>

                            </Card.Text>
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
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
