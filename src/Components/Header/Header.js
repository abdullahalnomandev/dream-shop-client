import React from 'react';
import { Form, Nav, Navbar, Button, FormControl, NavDropdown } from 'react-bootstrap';
import './header.css';
import { Link, useHistory } from "react-router-dom"

const Header = () => {

    const history = useHistory();
    function handleClick() {
        history.push("/register");
    }

    return (
        <div className="bg-light sticky-top">
            <div className="container">
                <Navbar collapseOnSelect expand="lg " >
                    <Navbar.Brand className="dream-riders " >Dream Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto nav-list">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                            <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
                            <button onClick={handleClick} className="btn btn-danger ms-auto">LogIn</button>
                        </Nav>
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        </div>
    );
};

export default Header;