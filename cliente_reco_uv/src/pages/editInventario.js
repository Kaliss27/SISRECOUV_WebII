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
            Costo: '',
            ID: ''
        }
    }

    EditArticulo = () => {
        const data = {
            "articulo": parseInt(this.state.Residuo),
            "cantidad": parseInt(this.state.Cantidad),
            "pesoXUnidad": parseFloat(this.state.PesoxUnidad),
            "fkiEstado": parseInt(this.state.Estado),
            "notas": this.state.Notas
        }
        console.log(data);
        axios.put('http://localhost:5001/api/inventarioadm/'+this.state.ID, JSON.stringify(data), {
            headers: {
                'Accept': 'aplication/json',
                'Content-type': 'application/json',
				'Authorization': 'Bearer ' + this.state.Token
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



    componentDidMount() {
        const id = this.props.match.params.id;

		axios.get ('http://localhost:5001/api/inventarioadm/' + id,
		{
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json',
				'Authorization': 'Bearer ' + this.state.Token
			}
		})
		.then (response => {
			if (response.status === 200) {
				this.setState (
					{
                        Residuo: response.data.articulo,
                        Cantidad: response.data.cantidad,
                        PesoxUnidad: response.data.pesoXUnidad,
                        Estado: response.data.fkiEstado,
                        Notas: response.data.notas,
                        ID: id
					}
				);	
			}
		})
		.catch (function (error) {
			console.log(error);
		})

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
    }

    render() {
        const { elements, categorias, residuos, estados } = this.state;
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <br></br> <br></br> <br></br>
                <Row>
                    <Col md={9}>
                        <Form>

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

                            <Button variant="primary" type="button" onClick={this.EditArticulo}>Editar Articulo</Button>
                        </Form>

                    </Col>
                 
                </Row>
            </Container>
        );
    }
}
export default RegistroVisitas;

