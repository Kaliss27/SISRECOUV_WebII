import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, useHistory, Link } from 'react-router-dom';
import Header from '../components/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class Inventario extends Component {
    constructor(props) {
        super(props);
        const tk = localStorage.getItem('ACCESS_TOKEN');
        this.state = {
            elements: [],
            categorias: [],
            residuos: [],
            estados: [],
            Token: tk,
            isFetched: false,
            error: null,
            Categoria: '',
            Residuo: '',
            Cantidad: '',
            PesoxUnidad: '',
            Estado: '',
            Notas: '',
            NomRe: '',
            Costo: ''
        }
        this.deleteElement = this.deleteElement.bind(this);
    }

    AddArticulo = () => {
        const data = {
            "articulo": parseInt(this.state.Residuo),
            "cantidad": parseInt(this.state.Cantidad),
            "pesoXUnidad": parseFloat(this.state.PesoxUnidad),
            "fkiEstado": parseInt(this.state.Estado),
            "notas": this.state.Notas
        }
        console.log(data);
        axios.post('http://localhost:5001/api/inventarioadm/addarticulo', JSON.stringify(data), {
            headers: {
                'Accept': 'aplication/json',
                'Content-type': 'application/json'
            }
        }).then(json => {
            if (json.data.status === 'Success') {
                alert("Data saved!");

                this.setState({
                    Categoria: '',
                    Residuo: '',
                    Cantidad: '',
                    PesoxUnidad: '',
                    Estado: '',
                    Notas: ''
                })

            } else {
                alert('Data not saved!');

            }
        })
    }

    AddResiduo = () => {
        const data = {
            "descripcion": this.state.NomRe,
            "categoria": parseInt(this.state.Categoria),
            "costoPromedioXUnidad": parseInt(this.state.Costo)
        }
        console.log(data);
        axios.post('http://localhost:5001/api/inventarioadm/addresiduo', JSON.stringify(data), {
            headers: {
                'Accept': 'aplication/json',
                'Content-type': 'application/json'
            }
        }).then(json => {
            if (json.data.status === 'Success') {
                alert("Data saved!");

                this.setState({
                    Categoria: '',
                    NomRe: '',
                    Costo: ''
                })

            } else {
                alert('Data not saved!');

            }
        })
    }

    deleteElement(id) {
        axios.delete("http://localhost:5001/api/inventarioadm/delarticulo/" + id)
            .then(response => {
                if (response.status === 200) {
                    if (response.data.status === "Success") {
                        alert("Registro eliminado!");
                    }
                }
            });
    }

    componentDidMount() {
        fetch("http://localhost:5001/api/inventarioadm",{
            headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json',
				'Authorization': 'Bearer ' + this.state.Token
			}
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            elements: result,
                            isFetched: true,
                            error: null
                        }

                    );
                    console.log(this.state);
                },
                (error) => {
                    this.setState(
                        {
                            elements: [],
                            isFetched: true,
                            error: error
                        }
                    );
                }
            );

        fetch("http://localhost:5001/api/inventarioadm/estados")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(
                        {
                            estados: result,
                            isFetched: true,
                            error: null
                        }

                    );
                    console.log(this.state);
                },
                (error) => {
                    this.setState(
                        {
                            estados: [],
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


    render() {
        const { elements, categorias, residuos, estados } = this.state;
        if (!this.state.Token) {
			return (
				<Redirect to={{ 
					pathname: '/LoginReco', 
					state: { 
						from: this.props.location 
					} 
				}} />
			);
		}
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <br /><br />
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Articulo</th>
                                    <th>Cantidad</th>
                                    <th>Estado</th>
                                    <th>Notas</th>
                                    <th colSpan="2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    elements.map(e =>
                                        <tr key={e.idArticulo}>
                                            <td>{e.idArticulo}</td>
                                            <td>{e.articulo}</td>
                                            <td>{e.cantidad}</td>
                                            <td>{e.estado}</td>
                                            <td>{e.notas}</td>
                                            <td><Link to={"/edit/" + e.idArticulo} className="btn btn-success">Editar</Link></td>
                                            <td><button type="button" onClick={() => this.deleteElement(e.idArticulo)} className="btn btn-danger">Eliminar</button></td>
                                        </tr>)
                                }
                            </tbody>
                        </Table>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Registrar nuevo articulo</Accordion.Toggle>
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
                                                    <Form.Control type="text" name="Cantidad" onChange={this.handleChange} value={this.state.Cantidad}></Form.Control>
                                                </Form.Group>
                                                <br />
                                                <Form.Group as={Col} controlId="formPxU1">
                                                    <Form.Label>Peso x Unidad</Form.Label>
                                                    <Form.Control type="text" name="PesoxUnidad" onChange={this.handleChange} value={this.state.PesoxUnidad}></Form.Control>
                                                </Form.Group>
                                            </Form.Row>

                                            <Form.Label>Estado</Form.Label>
                                            <Form.Control as="select" name="Estado" onChange={this.handleChange} value={this.state.Estado} >
                                                <option value=''>Selecciona una opción</option>
                                                {
                                                    estados.map(e =>
                                                        <option key={e.idEstados} value={e.idEstados}>{e.estado}</option>
                                                    )
                                                }
                                            </Form.Control>
                                            <br />
                                            <Form.Label>Notas</Form.Label>
                                            <Form.Control as="textarea" rows={3} name="Notas" onChange={this.handleChange} value={this.state.Notas}>

                                            </Form.Control>
                                            <br />

                                            <Button variant="primary" type="button" onClick={this.AddArticulo}>Registrar Articulo</Button>
                                        </Form>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Nuevo Residuo Electronico</Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <Form>
                                            <Form.Group as={Col} controlId="formCnt1">
                                                <Form.Label>Nombre residuo electronico</Form.Label>
                                                <Form.Control type="text" name="NomRe" onChange={this.handleChange} value={this.state.NomRe}></Form.Control>
                                            </Form.Group>
                                            <Form.Row>
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
                                                <br />
                                                <Form.Group controlId="formPxU1">
                                                    <Form.Label>Costo</Form.Label>
                                                    <Form.Control type="text" placeholder="costo promedio x unidad" name="Costo" onChange={this.handleChange} value={this.state.Costo}></Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            <Button variant="primary" type="button" onClick={this.AddResiduo}> Registrar Residuo </Button>
                                        </Form>
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
export default Inventario;

