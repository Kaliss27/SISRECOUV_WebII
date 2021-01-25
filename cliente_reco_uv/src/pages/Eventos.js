import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class Eventos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            TituloEvento: '',
            Descripción: '',
            Fecha: '',
            Hora: ''
        };
    }

    AddEvento = () => {
        const data = {
            "tituloEvento": this.state.TituloEvento,
            "descripción": this.state.Descripción,
            "fechaHora": this.state.Fecha.concat("T"+this.state.Hora+":00")
        }
        console.log(data);
        axios.post('http://localhost:5001/api/eventos', JSON.stringify(data), {
            headers: {
                'Accept': 'aplication/json',
                'Content-type': 'application/json'
            }
        }).then(json => {
            if (json.data.status === 'Success') {
                alert("Data saved!");

            } else {
                alert('Data not saved!');

            }
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <br/><br/><br/>
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
                                <Form.Control type="text" name="TituloEvento" onChange={this.handleChange} value={this.state.TituloEvento}/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control as="textarea" rows={3} name="Descripción" onChange={this.handleChange} value={this.state.Descripción}/>
                            </Form.Group>
                            <br />

                            <Form.Row>
                                <Form.Group controlId="formDate1">
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control type="date" name="Fecha" onChange={this.handleChange} value={this.state.Fecha}/>
                                </Form.Group>
                                <Form.Group controlId="formDate1">
                                    <Form.Label>Hora</Form.Label>
                                    <Form.Control type="time" name="Hora" onChange={this.handleChange} value={this.state.Hora}/>
                                </Form.Group>
                            </Form.Row>
                            <Button type="button" onClick={this.AddEvento}>Registrar Evento</Button>
                        </Form>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        );
    }
}
export default Eventos;