import React, { Component } from 'react';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
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
                        <br/><br/>
                        <CardGroup>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card></CardGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default VistaRapida;
