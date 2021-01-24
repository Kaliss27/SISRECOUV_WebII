import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default function InvFC1(props) {
    return (
        <React.Fragment>
            <Form>
                <Form.Group controlId="formCat1">
                </Form.Group>
                <Form.Group controlId="formRE1">
                
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col} controlId="formCnt1">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <br />
                    <Form.Group as={Col} controlId="formPxU1">
                        <Form.Label>Costo</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Label>Estado</Form.Label>
                <Form.Control as="select" defaultValue="---------">
                    <option>1</option>
                </Form.Control>
                <br />
                <Form.Label>Notas</Form.Label>
                <Form.Control as="textarea" rows={3}>
                    <option>1</option>
                </Form.Control>
                <br />

                <Button variant="primary" type="submit">Registrar Articulo</Button>
            </Form>
        </React.Fragment>
        );
}