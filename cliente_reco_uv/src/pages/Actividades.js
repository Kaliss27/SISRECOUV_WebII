import React, { Component } from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


class Actividades extends Component {

    constructor(props) {
        super(props);
        const tk = localStorage.getItem('ACCESS_TOKEN');
        this.state = {
            Token: tk,
         
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <br /><br /><br />
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Actividades Recolectron</Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>Descripcion</th>
                                                    <th>Fecha y hora de inicio</th>
                                                    <th>Fecha y hora de fin</th>
                                                    <th>Estado</th>
                                                    <th>Editar</th>
                                                    <th>Eliminar</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                              
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion><br />
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Registro de actividades</Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Form.Label>Descripcion actividad</Form.Label>
                                            <Form.Control as="textarea" rows={3}>
                                             
                                            </Form.Control>

                                            <Form.Label>Seleccione material utilizado en la actividad</Form.Label>
                                            <Form.Control as='select' defaulvalue='-------'>
                                                <option>1</option>
                                            </Form.Control>

                                            <Form.Row>
                                                <Form.Group controlId="formDate1">
                                                    <Form.Label>Fecha Inicio</Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                                <Form.Group controlId="formDate1">
                                                    <Form.Label>Hora Inicio</Form.Label>
                                                    <Form.Control type="time" />
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Row>
                                                <Form.Group controlId="formDate1">
                                                    <Form.Label>Fecha Termino</Form.Label>
                                                    <Form.Control type="date" />
                                                </Form.Group>
                                                <Form.Group controlId="formDate1">
                                                    <Form.Label>Hora Termino</Form.Label>
                                                    <Form.Control type="time" />
                                                </Form.Group>
                                            </Form.Row>
                                            <Button type='submit'>Registrar Actividad</Button>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion><br />
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Material en espera de revision</Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>Articulo</th>
                                                    <th>Cantidad</th>
                                                    <th>Peso por unidad</th>
                                                    <th>Eliminar</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        );
    }
}
export default Actividades;

