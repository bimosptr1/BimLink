import React, { useContext } from 'react'
import { Col, Nav, Navbar, Row, Container } from 'react-bootstrap'
import Logo from '../img/logo.svg'
import Cubes from '../img/cubes.svg'
import User from '../img/user.svg'
import Links from '../img/link.svg'
import Logout from '../img/logout.svg'

import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'

function MenuBar() {
    const navigate = useNavigate();
    const [, dispatch] = useContext(UserContext);

    const handleLogout = () => {
        dispatch({
            type: "logout",
        });
        navigate('/landing')
    };


    return (
        <Container fluid>
            <Row>
                <Col md='2' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
                    <Navbar sticky='top'>
                        <Nav className="flex-column">
                            <Navbar.Brand className='ps-5'>
                                <img src={Logo} width="100%" className="d-inline-block align-top" alt="bimLink" />
                            </Navbar.Brand>
                            <Nav.Link onClick={() => navigate('/templates')}> <img src={Cubes} alt="cubes" /> Template</Nav.Link>
                            <Nav.Link onClick={() => navigate('/profile')}> <img src={User} alt="user" /> Profile</Nav.Link>
                            <Nav.Link onClick={() => navigate('/mylink')}> <img src={Links} alt="links" /> My Link</Nav.Link>
                            <Nav.Link onClick={handleLogout} style={{ marginTop: '200px' }}> <img src={Logout} alt="logout" /> Logout</Nav.Link>
                        </Nav>
                    </Navbar>
                </Col>
                <Outlet />
            </Row>
        </Container>
    )
}

export default MenuBar