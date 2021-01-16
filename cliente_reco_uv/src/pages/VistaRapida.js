import React, { Component } from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { BsFillPersonFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { BiDollar } from "react-icons/bi";
import { IoMdSchool } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import 'bootstrap/dist/css/bootstrap.min.css';


class VistaRapida extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <br></br>
                <Row>
                    <Col md={3}>
                        <br /><br />
                        <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Usuario <BsFillPersonFill /></ListGroup.Item>
                                <ListGroup.Item>Impacto sustentable<BiWorld/></ListGroup.Item>
                                <ListGroup.Item>Valor del inventario<BiDollar /></ListGroup.Item>
                                <ListGroup.Item>Academico<IoMdSchool /></ListGroup.Item>
                                <ListGroup.Item>Manejo del reco<FiEdit/></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default VistaRapida;
