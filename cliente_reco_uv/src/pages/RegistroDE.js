import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Carousel from '../components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

class RegistroDE extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arts: [],
            deps: [],
            DETemp: [],
            DonEE: [],
            DonEPG: [],
            isFetched: false,
            error: null,
            Matricula: '',
            Nombre: '',
            Apaterno: '',
            Amaterno: '',
            Ped: '',
            FechaHora: '',
            Articulo: '',
            Cantidad: '',
            Destinatario: '',
            Telefono: '',
            Email: '',
            Causa: '',

        };

    }



    AddDatosE = () => {
        const data = {
            "matricula": this.state.Matricula,
            "nombre": this.state.Nombre,
            "apaterno": this.state.Apaterno,
            "amaterno": this.state.Amaterno,
            "fkDependencia": parseInt(this.state.Ped),
            "fechahora": this.state.FechaHora
        }
        console.log(data);
        axios.post('http://localhost:5001/api/donacionesemi/addstudent', JSON.stringify(data), {
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

    AddDatosPG = () => {
        const data = {
            "destinatario": this.state.Destinatario,
            "telefono": this.state.Telefono,
            "correoelectronico": this.state.Email,
            "causa": this.state.Causa,
            "fechahora": this.state.FechaHora
        }
        console.log(data);
        axios.post('http://localhost:5001/api/donacionesemi/addpublic', JSON.stringify(data), {
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

    AddDonEmi = () => {

        if (this.state.Matricula !== '') {

            const data = this.state.DonEE;

            console.log(data);
            axios.post('http://localhost:5001/api/donacionesemi/adddonacionest', JSON.stringify(data), {
                headers: {
                    'Accept': 'aplication/json',
                    'Content-type': 'application/json'
                }
            }).then(json => {
                if (json.data.status === 'Success') {
                    alert("Data saved!");
                    this.setState({
                        Matricula: '',
                        Nombre: '',
                        Apaterno: '',
                        Amaterno: '',
                        Ped: '',
                        FechaHora: '',
                        Articulo: '',
                        Cantidad: '',
                        DETemp: [],
                        DonEE: [],
                        DonEPG: []
                    })

                } else {
                    alert('Data not saved!');

                }
            })
        }
        if (this.state.Destinatario !== '') {

            const data = this.state.DonEPG;

            console.log(data);
            axios.post('http://localhost:5001/api/donacionesemi/adddonacionpg', JSON.stringify(data), {
                headers: {
                    'Accept': 'aplication/json',
                    'Content-type': 'application/json'
                }
            }).then(json => {
                if (json.data.status === 'Success') {
                    alert("Data saved!");
                    this.setState({
                        FechaHora: '',
                        Articulo: '',
                        Cantidad: '',
                        Destinatario: '',
                        Telefono: '',
                        Email: '',
                        Causa: '',
                        DETemp: [],
                        DonEE: [],
                        DonEPG: []
                    })

                } else {
                    alert('Data not saved!');

                }
            })
        }






    }


    componentDidMount() {
        fetch("http://localhost:5001/api/donacionesemi/articulos")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            arts: result,
                            isFetched: true,
                            error: null
                        }

                    );
                    console.log(this.state);
                },
                (error) => {
                    this.setState(
                        {
                            arts: [],
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

    };

    addElement = () => {
        let temp = {
            idart: '',
            art: '',
            cant: ''
        }
        let donepg = {
            fkArticulo: '',
            cantidad: ''
        }
        let doneme = {
            fkComponente: '',
            cantidad: ''
        }

        this.state.arts.map(i => {
            if (i.idArticulo === parseInt(this.state.Articulo)) {
                temp.art = i.articulo;
            }
        })

        temp.idart = parseInt(this.state.Articulo);
        temp.cant = parseInt(this.state.Cantidad);
        donepg.fkArticulo = temp.idart;
        donepg.cantidad = temp.cant;
        doneme.fkComponente = donepg.fkArticulo;
        doneme.cantidad = donepg.cantidad;

        this.state.DETemp.push(temp);
        this.state.DonEPG.push(donepg);
        this.state.DonEE.push(doneme);

        this.setState({
            Articulo: '',
            Cantidad: ''
        });

        console.log(this.state.DETemp);
        console.log(this.state.DonEPG);
        console.log(this.state.DonEE);
    }

    eraseElement = () => {
        this.state.DETemp.pop();
        this.state.DonEE.pop();
        this.state.DonEPG.pop();
        console.log(this.state.DETemp);

        this.setState({
            Articulo: '',
            Cantidad: '',
        });

    }

    render() {
        const { deps, arts, DETemp } = this.state;
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
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="profile" title="Estudiantes">
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
                                            <Form.Control as="select" name="Ped" onChange={this.handleChange} value={this.state.Ped}>
                                                <option value=''>Seleccione una opción</option>
                                                {
                                                    deps.map(e =>
                                                        <option key={e.idPeDeps} value={e.idPeDeps}>{e.peDependencia}</option>

                                                    )

                                                }
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group controlId="formDate1">
                                            <Form.Label>Fecha</Form.Label>
                                            <Form.Control type="date" name="FechaHora" onChange={this.handleChange} value={this.state.FechaHora} />
                                        </Form.Group>
                                    </Form.Row>
                                    <Button variant="primary" type="button" onClick={this.AddDatosE}>
                                        Registrar datos
                                        </Button>
                                </Form>
                            </Tab>
                            <Tab eventKey="contact" title="Publico General">
                                <Form>
                                    <Form.Group controlId="formDest">
                                        <Form.Label>Destinatario</Form.Label>
                                        <Form.Control type="text" name="Destinatario" onChange={this.handleChange} value={this.state.Destinatario} />
                                    </Form.Group>

                                    <Form.Row>
                                        <Form.Group controlId="formTel">
                                            <Form.Label>Telefono de Contacto</Form.Label>
                                            <Form.Control type="text" placeholder="Telefono" name="Telefono" onChange={this.handleChange} value={this.state.Telefono} />
                                        </Form.Group>

                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Correo electronico</Form.Label>
                                            <Form.Control type="text" placeholder="Email" name="Email" onChange={this.handleChange} value={this.state.Email} />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group controlId="formCausa">
                                        <Form.Label>Causa</Form.Label>
                                        <Form.Control type="text" name="Causa" onChange={this.handleChange} value={this.state.Causa} />
                                    </Form.Group>
                                    <Form.Group controlId="formAP1">
                                        <Form.Label>Fecha</Form.Label>
                                        <Form.Control type="date" name="FechaHora" onChange={this.handleChange} value={this.state.FechaHora} />
                                    </Form.Group>

                                    <Button variant="primary" type="button" onClick={this.AddDatosPG}>
                                        Registrar datos
                                     </Button>
                                </Form>
                            </Tab>
                        </Tabs>
                        <br />
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Agregar articulos!</Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Form.Row>
                                                <Form.Group controlId="formCat1">

                                                    <Form.Label>Articulo</Form.Label>
                                                    <Form.Control as="select" name="Articulo" onChange={this.handleChange} value={this.state.Articulo}>
                                                        <option value=''>Selecciona una opción</option>
                                                        {
                                                            arts.map(e =>
                                                                <option key={e.idArticulo} value={e.idArticulo}>{e.articulo}</option>

                                                            )

                                                        }
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId="formCnt1">
                                                    <Form.Label>Cantidad</Form.Label>
                                                    <Form.Control type="text" name="Cantidad" onChange={this.handleChange} value={this.state.Cantidad}></Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            <br />
                                            <Form.Row>
                                                <Button variant="primary" type="button" onClick={this.addElement}> Agregar</Button>
                                                <Button variant="primary" type="button" onClick={this.eraseElement}>Borrar</Button>
                                            </Form.Row>
                                        </Form>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Articulo</th>
                                                    <th>Cantidad</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    DETemp.map(i =>
                                                        <tr key={i.idart}>
                                                            <td>{i.art}</td>
                                                            <td>{i.cant}</td>

                                                        </tr>)
                                                }
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Button variant="primary" type="button" onClick={this.AddDonEmi}> Finalizar Registro</Button>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default RegistroDE;

