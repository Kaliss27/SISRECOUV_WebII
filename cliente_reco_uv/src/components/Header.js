import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



export default function Header(props) {
    //const classes = useStyles();
    //const { sections, title } = props;

    return (
        <React.Fragment>
            <Navbar bg="light" expand="lg" fixed='top'>
                <Navbar.Brand href="#home">
                    <img
                        src="https://scontent.fver1-1.fna.fbcdn.net/v/t1.0-9/59536211_2144295808981987_6542444164972281856_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=aTt4aFia_fsAX8jKWGt&_nc_ht=scontent.fver1-1.fna&oh=ea9359480d60030e86b4a416efe3feac&oe=602320EE"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo RECOLECTRON"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#link">Visitas</Nav.Link>
                        <Nav.Link href="#link">Donaciones Recibidas</Nav.Link>
                        <Nav.Link href="#link">Donaciones Emitidas</Nav.Link>
                        <Nav.Link href="#link">Eventos</Nav.Link>
                        <Nav.Link href="#link">Equipo Reco</Nav.Link>
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};