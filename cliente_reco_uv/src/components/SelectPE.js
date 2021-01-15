import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default function SelectPE(props) {
    return (
        <React.Fragment>
                <Form.Label>Selecciona tu Programa educativo</Form.Label>
                <Form.Control as="select" defaultValue="---------">
                    <option>1</option>
                </Form.Control>

        </React.Fragment>

    );
}

