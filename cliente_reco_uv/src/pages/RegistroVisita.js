import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';


class RegistroVisitas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visits: [],
            isFetched: false,
            error: null,
            deps: [],
            Matricula: '',
            Nombre: '',
            Apaterno: '',
            Amaterno: '',
            PeDependencia: '',
            TipoVisita: '',
            FechaHora: ''
        };
    }


    AddVisita = () => {
        const data = {
            "matricula": this.state.Matricula,
            "nombre": this.state.Nombre,
            "apaterno": this.state.Apaterno,
            "amaterno": this.state.Amaterno,
            "pedependencia": parseInt(this.state.PeDependencia),
            "tipovisita": parseInt(this.state.TipoVisita),
            "fechahora": this.state.FechaHora
        }
        console.log(data);
        axios.post('http://localhost:5001/api/regvisitas', JSON.stringify(data), {
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

    componentDidMount() {
        fetch("http://localhost:5001/api/regvisitas/catalogovisitas")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            visits: result,
                            isFetched: true,
                            error: null
                        }

                    );
                    console.log("Catalogo Visitas: ");
                    console.log(this.state);
                },
                (error) => {
                    this.setState(
                        {
                            visits: [],
                            isFetched: true,
                            error: error
                        }
                    );
                }
            );

        fetch("http://localhost:5001/api/regvisitas/catalogope")
            .then(res => res.json())
            .then(
                (result) => {

                    this.setState(
                        {
                            deps: result,
                            isFetched: true,
                            error: null
                        }

                    );
                    console.log("CatalogoPE: ");
                    console.log(this.state);
                },
                (error) => {

                    this.setState(
                        {
                            deps: [],
                            isFetched: true,
                            error: error
                        }
                    );
                    console.log(error);
                }
            )
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    render() {
        const { visits, isFetched, error } = this.state;
        const { deps } = this.state;
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <br></br> <br></br> <br></br>
                <Row>
                    <Col md={9}>
                        <label> Registra tu visita al recolectron
                        </label>
                        <Form>
                            <Form.Group controlId="formMatricula1">
                                <Form.Label>Matricula UV</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu matricula" name="Matricula" onChange={this.handleChange} value={this.state.Matricula} />
                            </Form.Group>

                            <Form.Group controlId="formNames1">
                                <Form.Label>Nombre (s)</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu(s) nombre(s)" name="Nombre" onChange={this.handleChange} value={this.state.Nombre} />
                            </Form.Group>

                            <Form.Group controlId="formAP1">
                                <Form.Label>Apellido Paterno</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu apellido paterno" name="Apaterno" onChange={this.handleChange} value={this.state.Apaterno} />
                            </Form.Group>
                            <Form.Group controlId="formAP1">
                                <Form.Label>Apellido Materno</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu apellido materno" name="Amaterno" onChange={this.handleChange} value={this.state.Amaterno} />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formSPE1">
                                    <Form.Label>Selecciona tu Programa Educativo</Form.Label>
                                    <Form.Control as="select" onChange={this.handleChange} name="PeDependencia" value={this.state.PeDependencia}>
                                        <option value=''>Seleccione una opción</option>
                                        {
                                            deps.map(e =>
                                                <option key={e.idPeDeps} value={e.idPeDeps}>{e.peDependencia}</option>

                                            )

                                        }
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formVisit1">
                                    <Form.Label>Motivo de visita</Form.Label>
                                    <Form.Control as="select" onChange={this.handleChange} name="TipoVisita" value={this.state.TipoVisita}>
                                        <option value=''>Seleccione una opción</option>
                                        {
                                            visits.map(e =>
                                                <option key={e.idVisita} value={e.idVisita}>{e.tipoVisita}</option>

                                            )

                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formDate1">
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control type="date" onChange={this.handleChange} name="FechaHora" value={this.state.FechaHora} />
                            </Form.Group>

                            <Button variant="primary" type="button" onClick={this.AddVisita}>
                                Registrar visita
                             </Button>
                        </Form>
                    </Col>
                    <Col md={3}>
                        <Image src="https://scontent.fntr5-1.fna.fbcdn.net/v/t31.0-8/23783873_1465675933510648_790669500695388633_o.jpg?_nc_cat=105&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeG4VZO9H1Y_hkAKZalm2mBqDASs9lEPbZkMBKz2UQ9tmbYBOHp94Pim7-VblIrvT0gpC0EJcIreuYZEGy9Wfnsf&_nc_ohc=XGrntB41JI8AX_X1Kg5&_nc_ht=scontent.fntr5-1.fna&oh=ec207d9809ed1d6e90a2a578937acc2e&oe=6025E10E" fluid />
                        <br></br><br />
                        <Image src="https://scontent.fntr5-1.fna.fbcdn.net/v/t31.0-8/23799887_1465676040177304_1658679170752722236_o.jpg?_nc_cat=107&ccb=2&_nc_sid=cdbe9c&_nc_eui2=AeGYPMtmGHeS-Ftnw1ImHLRPlhGh0-CZxVKWEaHT4JnFUhTC4NNULm8cKY1C4c-y4i-ZW77weROR09UVxZmiKkK2&_nc_ohc=uHZqXAFswksAX_EIar6&_nc_ht=scontent.fntr5-1.fna&oh=fb6b9436501bc016197b8e263ec0e402&oe=6026A9D4" fluid />

                    </Col>
                </Row>
            </Container>
        );
    }
}
export default RegistroVisitas;

