import React, { Component } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class RegistroDR extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <br></br> <br></br> <br></br>
                <Row>                   
                    <Col md={8}>
                        <label> Acceso
                        </label>
                        <Form>
                            <Form.Group controlId="formUN1">
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu nombre de usuario" />
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu contrasenia" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Entrar
                                </Button>
                        </Form>
                        <br />
                    </Col>
                    <Col md={4}>
                        <Carousel />
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default RegistroDR;

