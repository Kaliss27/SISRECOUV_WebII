import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function InvFC2(props) {
    return (
        <React.Fragment>
            <Form>
                <Form.Group as={Col} controlId="formCnt1">
                    <Form.Label>Nombre residuo electronico</Form.Label>
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
                <Form.Row>
                    <Form.Group controlId="formCat1">
                        <SelectCA />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formPxU1">
                        <Form.Label>Costo</Form.Label>
                        <Form.Control type="text" placeholder="costo promedio x unidad"></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit"> Registrar Articulo </Button>
            </Form>
        </React.Fragment>
    );
}
