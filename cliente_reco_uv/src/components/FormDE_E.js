import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function FormDE_E(props) {
    return (
        <React.Fragment>
        <Form>
            <Form.Group controlId="formMatricula1">
                <Form.Label>Matricula UV</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu matricula" />
            </Form.Group>

            <Form.Group controlId="formNames1">
                <Form.Label>Nombre (s)</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu(s) nombre(s)" />
            </Form.Group>

            <Form.Group controlId="formAP1">
                <Form.Label>Apellido Paterno</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu apellido paterno" />
            </Form.Group>
            <Form.Group controlId="formAP1">
                <Form.Label>Apellido Materno</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu apellido materno" />
            </Form.Group>

            <Form.Row>
                
                    <Form.Group controlId="formDate1">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
                Registrar datos
            </Button>
            </Form>
        </React.Fragment>
);
}