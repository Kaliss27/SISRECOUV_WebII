import React, { Component } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


class InicioReco extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Header/>
                </Row>
                <br/><br/><br/>
                <Row>
                   <Carousel/>
                </Row>
            </Container>
        );
    }
}
export default InicioReco;

