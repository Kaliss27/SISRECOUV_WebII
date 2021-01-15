import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormDE_PG(props) {
    return (
        <React.Fragment>
            <Form>
                <Form.Group controlId="formDest">
                    <Form.Label>Destinatario</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Row>
                    <Form.Group controlId="formTel">
                        <Form.Label>Telefono de Contacto</Form.Label>
                        <Form.Control type="text" placeholder="Telefono" />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Correo electronico</Form.Label>
                        <Form.Control type="text" placeholder="Email"/>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formAP1">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Registrar datos
            </Button>
            </Form>
        </React.Fragment>
    );
}