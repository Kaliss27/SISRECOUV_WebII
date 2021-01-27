import React, { Component } from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


class LoginReco extends Component {

    constructor(props) {
        super(props);

        this.state = {
            User: {},
            UserName: '',
            Password: '',
            Prev: props.location.state.from.pathname
        }

        this.doLogin = this.doLogin.bind(this);
    }

    doLogin() {
        console.log(this.state);
        axios.post('http://localhost:5001/api/usuarios/authenticate',
            {
                "nombre": '',
                "apaterno": '',
                "amaterno": '',
                "nombreUsuario": this.state.UserName,
                "contrasenia": this.state.Password,
                "token": ''
            }).then(
                (response) => {
                    if(response.status === 200){
                        const json = response.data;
                        localStorage.setItem("ACCESS_TOKEN",json.token);
                        console.log(localStorage);
                        this.props.history.push(this.state.Prev);
                    }
                },
                (error) => {
                    console.log("Exception "+ error);
                }
            );
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    }

    render() {
        return (
            <Container>
                <Row>
                    <Header />
                </Row>
                <br></br> <br></br> <br></br>
                <Row>
                    <Col md={8}>
                        <label> Acceso
                        </label>
                        <Form>
                            <Form.Group controlId="formUN1">
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu nombre de usuario" name="UserName" onChange={this.handleChange} value={this.state.UserName}/>
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu contraseña" name="Password" onChange={this.handleChange} value={this.state.Password}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={this.doLogin}>
                                Entrar
                                </Button>
                        </Form>
                        <br />
                    </Col>
                    <Col md={4}>
                        <Carousel />
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default LoginReco;

