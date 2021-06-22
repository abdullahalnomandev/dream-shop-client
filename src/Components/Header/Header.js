import React, { useContext } from 'react';
import { Form, Nav, Navbar, Button, FormControl, NavDropdown } from 'react-bootstrap';
import './header.css';
import { Link } from "react-router-dom"
import { UseContext } from '../../App';
import { useState } from 'react';


const Header = () => {

    const [loginUser, setLoginUser] = useContext(UseContext);

    return (
        <div className="bg-light sticky-top">
            <div className="container">
                <Navbar collapseOnSelect expand="lg " >
                    <Navbar.Brand as={Link} to="/" className="dream-riders " >Dream Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto nav-list">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                            <Nav.Link as={Link} to="/deals">Deals</Nav.Link>
                        </Nav>

                        {
                            loginUser.name === undefined &&
                            <Link to="/register">
                                <button className="btn btn-success ms-auto">Log In</button>
                            </Link>
                        }

                        {
                            loginUser.name !== undefined &&
                            <button onClick={() => setLoginUser({})} className="btn btn-danger ms-auto">Log out</button>
                        }
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        </div>
    );
};

export default Header;