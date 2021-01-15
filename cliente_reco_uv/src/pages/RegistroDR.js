import React, { Component } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import SelectCA from '../components/SelectCA';
import SelectRE from '../components/SelectRE';
import Table from 'react-bootstrap/Table';
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
                    <Col md={3}>
                        <Carousel/>
                    </Col>
                    <Col md={9}>
                        <label> Registra tu donacion al recolectron
                        </label>
                        <Form>
                            <Form.Group controlId="formOrigen1">
                                <Form.Label>Origen</Form.Label>
                                <Form.Control as="select" defaultValue="---------">
                                    <option>1</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formFName1">
                                <Form.Label>Nombre Completo</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu(s) nombre(s)" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group controlId="formTel1">
                                    <Form.Label> Telefono </Form.Label>
                                    <Form.Control type="text" placeholder="Telefono de contacto" />
                                </Form.Group>
                                <br/>
                                <Form.Group controlId="formEmail1">
                                    <Form.Label>Correo Electronico</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa tu email" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formDate1">
                                <Form.Label>Fecha de recepcion</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Registrar Datos
                             </Button>
                        </Form>
                        <br/>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Agregar articulos!</Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="formCat1">
                                                <SelectCA/>
                                            </Form.Group>
                                            <Form.Group controlId="formRE1">
                                                <SelectRE/>
                                            </Form.Group>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formCnt1">
                                                    <Form.Label>Cantidad</Form.Label>
                                                    <Form.Control type="text"></Form.Control>
                                                </Form.Group>
                                                <br />
                                                <Form.Group as={Col} controlId="formPxU1">
                                                    <Form.Label>Peso por Unidad</Form.Label>
                                                    <Form.Control type="text"></Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Button variant="primary" type="submit"> Agregar</Button>
                                                <Button variant="primary" type="submit">Borrar</Button>
                                            </Form.Row>
                                        </Form>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Articulo</th>
                                                    <th>Cantidad</th>
                                                    <th>Peso</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td colSpan="2">Larry the Bird</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Button variant="primary" type="submit"> Finalizar Registro</Button>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default RegistroDR;

