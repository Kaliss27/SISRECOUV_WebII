import React, { Component } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import TabsDE from '../components/TabsDE';
import TableDE from '../components/TableDE';

class RegistroDE extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <br></br> <br></br> <br></br>
                <Row>
                    <Col md={3}>
                        <Image src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/29315054_1578924468852460_3020923508872970240_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_eui2=AeGPVekIiG_6zko7ibpvFGwwzYlUbgL5Zh_NiVRuAvlmH91SuBzyUzV9hTjK4vF5KTjJkH_TKxcj6MD9YEoqaVas&_nc_ohc=d87QJ6Y6EGwAX9LLSyz&_nc_ht=scontent-qro1-1.xx&oh=b87c09ff9de8b217c3cc0aa70a7c91bf&oe=60266DEE" fluid />
                        <br></br><br />
                        <Image src="https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/29386187_1578922088852698_4464907727289712640_o.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_eui2=AeGnwRTqkJ9yxpk360A1m_s5kPa1VbQG9OeQ9rVVtAb05wMf1EmDUxjVXEPdDpyHjsF4DLC0mzp_6BadiDDiF5pr&_nc_ohc=7s8te20KXTUAX-fXZLW&_nc_ht=scontent-qro1-1.xx&oh=7a49efda9f4bfec5bbad70354b8fef96&oe=6026C42C" fluid />
                    </Col>
                    <Col md={9}>
                        <label> Registra tu visita al recolectron</label>
                        <TabsDE />
                        <br />
                        <TableDE/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default RegistroDE;

