import React, { Component } from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ActTC1 from '../components/ActTC1';
import ActFC2 from '../components/ActFC2';
import ActTC3 from '../components/ActTC3';
import 'bootstrap/dist/css/bootstrap.min.css';


class Actividades extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <br/><br/><br/>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                   Actividades Recolectron</Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <ActTC1/>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion><br/>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                   Registro de actividades</Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <ActFC2/>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion><br/>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Material en espera de revision</Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <ActTC3/>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        );
    }
}
export default Actividades;

