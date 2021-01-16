import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default function SelectRE(props) {
    return (
        <React.Fragment>
            <Form.Label>Residuo Electronico</Form.Label>
            <Form.Control as="select" defaultValue="---------">
                <option>1</option>
            </Form.Control>

        </React.Fragment>

    );
}

