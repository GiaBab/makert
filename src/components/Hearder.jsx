import React from 'react';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Harder = ({}) => {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">AllMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Fragment>
    );
} 

export default Harder; 