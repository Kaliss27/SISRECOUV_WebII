import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function FormTable(props) {
    return (
        <React.Fragment>
            <Form>
                <Form.Group controlId="formCat1">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control as="select" defaultValue="---------">
                        <option>1</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formRE1">
                    <Form.Label>Residuo Electronico</Form.Label>
                    <Form.Control as="select" defaultValue="---------">
                        <option>1</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </React.Fragment>
        );
}
