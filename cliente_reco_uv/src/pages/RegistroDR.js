import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


class RegistroDR extends Component {

    constructor(props) {
        super(props);
        this.state = {
            origens: [],
            categorias: [],
            residuos: [],
            dr: [],
            aux: [],
            isFetched: false,
            error: null,
            Origen: '',
            Nombre: '',
            CorreoElectronico: '',
            Telefono: '',
            FechaHora: '',
            Categoria: '',
            Residuo: '',
            Cantidad: '',
            PesoxUnidad: '',
            DonRec: [],
            DRTemp: []
        };

    }



    AddDatos = () => {
        const data = {
            "origen": parseInt(this.state.Origen),
            "nombre": this.state.Nombre,
            "telefono": this.state.Telefono,
            "correoelectronico": this.state.CorreoElectronico,
            "fechahora": this.state.FechaHora
        }
        console.log(data);
        axios.post('http://localhost:5001/api/donacionesrec/addperson', JSON.stringify(data), {
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

    AddDonRec = () => {
        const data = this.state.DonRec;

        console.log(data);
        axios.post('http://localhost:5001/api/donacionesrec/regdonacion', JSON.stringify(data), {
            headers: {
                'Accept': 'aplication/json',
                'Content-type': 'application/json'
            }
        }).then(json => {
            if (json.data.status === 'Success') {
                alert("Data saved!");
                this.setState({
                    Origen: '',
                    Nombre: '',
                    CorreoElectronico: '',
                    Telefono: '',
                    FechaHora: '',
                    Categoria: '',
                    DonRec: [],
                    DRTemp: []
                })

            } else {
                alert('Data not saved!');

            }
        })

        
    }


    componentDidMount() {
        fetch("http://localhost:5001/api/donacionesrec/origen")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            origens: result,
                            isFetched: true,
                            error: null
                        }

                    );
                    console.log(this.state);
                },
                (error) => {
                    this.setState(
                        {
                            origens: [],
                            isFetched: true,
                            error: error
                        }
                    );
                }
            );

        fetch("http://localhost:5001/api/donacionesrec/categoriare")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            categorias: result,
                            isFetched: true,
                            error: null
                        }

                    );
                    console.log(this.state);
                },
                (error) => {
                    this.setState(
                        {
                            categorias: [],
                            isFetched: true,
                            error: error
                        }
                    );
                }
            );

        fetch("http://localhost:5001/api/donacionesrec/residuoselectronicos")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            residuos: result,
                            aux: result,
                            isFetched: true,
                            error: null
                        }

                    );
                    console.log(this.state);
                },
                (error) => {
                    this.setState(
                        {
                            residuos: [],
                            aux: [],
                            isFetched: true,
                            error: error
                        }
                    );
                }
            );

        fetch("http://localhost:5001/api/donacionesrec")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            dr: result,
                            isFetched: true,
                            error: null
                        }

                    );
                    console.log(this.state);
                },
                (error) => {
                    this.setState(
                        {
                            dr: [],
                            isFetched: true,
                            error: error
                        }
                    );
                }
            );
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        if (e.target.name === "Categoria")
            this.handleSelect(e);
    };

    handleSelect = (e) => {

        let idcat = parseInt(e.target.value);
        let arr = [];
        this.state.aux.map(i => {
            if (idcat === i.categoria) {
                arr.push(i);
            }
        });

        this.setState(
            {
                residuos: arr
            }

        );


    }

    addElement = () => {
        let donrecs = {
            fkRe: '',
            cantidad: '',
            pesoXUnidad: ''
        }
        let temp = {
            idres: '',
            res: '',
            cant: '',
            pxu: ''
        }

        this.state.residuos.map(i => {
            if (i.idRe === parseInt(this.state.Residuo)) {
                temp.res = i.descripcion;
            }
        })

        donrecs.fkRe = parseInt(this.state.Residuo);
        donrecs.cantidad = parseInt(this.state.Cantidad);
        donrecs.pesoXUnidad = parseFloat(this.state.PesoxUnidad);
        temp.idres = donrecs.fkRe;
        temp.cant = donrecs.cantidad;
        temp.pxu = donrecs.pesoXUnidad;

        this.state.DonRec.push(donrecs);
        this.state.DRTemp.push(temp);

        this.setState({
            Residuo: '',
            Cantidad: '',
            PesoxUnidad: ''
        });

        console.log(this.state.DonRec);
        console.log(this.state.DRTemp);
    }

    eraseElement = () => {
        this.state.DonRec.pop();
        this.state.DRTemp.pop();

        console.log(this.state.DonRec);
        console.log(this.state.DRTemp);

        this.setState({
            Residuo: '',
            Cantidad: '',
            PesoxUnidad: ''
        });
    }
    render() {

        const { origens, isFetched, error, categorias, residuos, DRTemp } = this.state;

        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <br></br> <br></br> <br></br>
                <Row>
                    <Col md={3}>
                        <Carousel />
                    </Col>
                    <Col md={9}>
                        <label> Registra tu donacion al recolectron
                        </label>
                        <Form>
                            <Form.Group controlId="formOrigen1">
                                <Form.Label>Origen</Form.Label>
                                <Form.Control as="select" name="Origen" onChange={this.handleChange} value={this.state.Origen}>
                                    <option value=''>Selecciona una opción</option>
                                    {
                                        origens.map(e =>
                                            <option key={e.idOrigen} value={e.idOrigen}>{e.origenTipo}</option>
                                        )
                                    }
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formFName1">
                                <Form.Label>Nombre Completo</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu nombre completo" name="Nombre" onChange={this.handleChange} value={this.state.Nombre} />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group controlId="formTel1">
                                    <Form.Label> Telefono </Form.Label>
                                    <Form.Control type="text" placeholder="Telefono de contacto" name="Telefono" onChange={this.handleChange} value={this.state.Telefono} />
                                </Form.Group>
                                <br />
                                <Form.Group controlId="formEmail1">
                                    <Form.Label>Correo Electronico</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa tu email" name="CorreoElectronico" onChange={this.handleChange} value={this.state.CorreoElectronico} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formDate1">
                                <Form.Label>Fecha de recepcion</Form.Label>
                                <Form.Control type="date" name="FechaHora" onChange={this.handleChange} value={this.state.FechaHora} />
                            </Form.Group>

                            <Button variant="primary" type="button" onClick={this.AddDatos}>
                                Registrar Datos
                             </Button>
                        </Form>
                        <br />
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Agregar articulos!</Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Form.Group controlId="formCat1">
                                                <Form.Label>Categoria</Form.Label>
                                                <Form.Control as="select" name="Categoria" onChange={this.handleChange} value={this.state.Categoria}>
                                                    <option value=''>Selecciona una opción</option>
                                                    {
                                                        categorias.map(e =>
                                                            <option key={e.idCRe} value={e.idCRe}>{e.categoria}</option>
                                                        )
                                                    }
                                                </Form.Control>

                                            </Form.Group>
                                            <Form.Group controlId="formRE1">
                                                <Form.Label>Residuo Electronico</Form.Label>
                                                <Form.Control as="select" name="Residuo" onChange={this.handleChange} value={this.state.Residuo} >
                                                    <option value=''>Selecciona una opción</option>
                                                    {
                                                        residuos.map(e =>
                                                            <option key={e.idRe} value={e.idRe}>{e.descripcion}</option>
                                                        )
                                                    }
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formCnt1">
                                                    <Form.Label>Cantidad</Form.Label>
                                                    <Form.Control type="text" name="Cantidad" onChange={this.handleChange} value={this.state.Cantidad} />
                                                </Form.Group>
                                                <br />
                                                <Form.Group as={Col} controlId="formPxU1">
                                                    <Form.Label>Peso por Unidad (Kg)</Form.Label>
                                                    <Form.Control type="text" name="PesoxUnidad" onChange={this.handleChange} value={this.state.PesoxUnidad} />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Button variant="primary" type="button" onClick={this.addElement}>Agregar</Button>
                                                <Button variant="primary" type="button" onClick={this.eraseElement}>Borrar</Button>
                                            </Form.Row>
                                        </Form>
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Articulo</th>
                                                    <th>Cantidad</th>
                                                    <th>Peso</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    DRTemp.map(i =>
                                                        <tr key={i.idres}>
                                                            <td>{i.res}</td>
                                                            <td>{i.cant}</td>
                                                            <td>{i.pxu}</td>
                                                        </tr>)
                                                }
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Button variant="primary" type="button" onClick={this.AddDonRec}> Finalizar Registro</Button>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default RegistroDR;

