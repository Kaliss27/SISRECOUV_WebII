import React, { Component } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class Eventos extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <br></br>
                <Row>
                    <Carousel />
                </Row>
                <br></br>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <label>Registro de Eventos</label>
                    <Form>
                        <Form.Group controlId="formEventos">
                            <Form.Label>Titulo del evento</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group controlId="formDate1">
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group controlId="formDate1">
                                    <Form.Label>Hora</Form.Label>
                                    <Form.Control type="time"/>
                                </Form.Group>
                            </Form.Row>
                            <Button type="submit">Registrar Evento</Button>
                    </Form>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        );
    }
}
export default Eventos;