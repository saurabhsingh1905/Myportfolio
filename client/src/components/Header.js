import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { NavLink } from 'react-router-dom';

const Header = () => {

    const common={
        marginRight:25,
        fontSize:17,
        letterSpacing:".5px",
        color:"black"
    }
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <div>
                        <h2 className='mt-2 h2_right' style={{ color: "#6c63ff" }}>
                            <NavLink  to="/" className="text-decoration-none">Saurabh Singh</NavLink >
                        </h2>
                    </div>

                    <Nav className="">
                        <div className='mt-2'>
                            <NavLink to="/" className="text-decoration-none" style={common}>Home</NavLink>
                            <NavLink to="/about" className="text-decoration-none" style={common}>About</NavLink>
                            <NavLink to="/project" className="text-decoration-none" style={common}>Project</NavLink>
                            <NavLink to="/contact" className="text-decoration-none" style={common}>Hire-Me</NavLink>
                    
                        </div>

                        <div>
                        <a  href={require("../assets/img/static.pdf")} download="saurabh resume" > 
                            <Button variant="danger">Resume</Button>
                            </a>
                        </div>

                    </Nav>

                </Container>
            </Navbar>
        </>
    )
}

export default Header