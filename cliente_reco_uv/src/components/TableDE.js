import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

export default function TableDE(props) {
    return (
        <React.Fragment>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Agregar articulos!</Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formCat1">
                                </Form.Group>
                                <Form.Group controlId="formCnt1">
                                    <Form.Label>Cantidad</Form.Label>
                                    <Form.Control type="text"></Form.Control>
                                </Form.Group>
                                <br />
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
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Button variant="primary" type="submit"> Finalizar Registro</Button>
            </Accordion>
        </React.Fragment>
        )


}