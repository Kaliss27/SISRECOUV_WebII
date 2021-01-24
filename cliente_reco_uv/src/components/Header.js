import React from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../CSS/NavbarReco.css'


const Header = () => (

    <Navbar expand="lg" fixed='top' className='navbar-default'>
        <Navbar.Brand href="#home">
            <img
                src="https://scontent.fver1-1.fna.fbcdn.net/v/t1.0-9/59536211_2144295808981987_6542444164972281856_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=aTt4aFia_fsAX8jKWGt&_nc_ht=scontent.fver1-1.fna&oh=ea9359480d60030e86b4a416efe3feac&oe=602320EE"
                width="35"
                height="35"
                className="d-inline-block align-top"
                alt="Logo RECOLECTRON"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

                <Link to="/InicioReco'">Inicio</Link>
                <Link to="/RegistroVisita">Visitas</Link>
                <Link to="/RegistroDR">Donaciones Recibidas</Link>
                <Link to="/RegistroDE">Donaciones Emitidas</Link>
                <Link to="/Eventos">Eventos</Link>
                <Link to="/LoginReco">Equipo Reco</Link>

            </Nav>
        </Navbar.Collapse>
    </Navbar>

);

export default Header;