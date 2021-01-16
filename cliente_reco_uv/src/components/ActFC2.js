import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ActFC2(props) {
    return (
        <React.Fragment>
            <Form>
                <Form.Label>Descripcion actividad</Form.Label>
                <Form.Control as="textarea" rows={3}>
                    <option>1</option>
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
        </React.Fragment>
        );
}