import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



const Naviagtion= () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
       <Container>
   
       <Navbar.Brand href="#home">Meal Prep</Navbar.Brand>


  

       <Nav className="me-auto">

       <Nav.Link as={Link} to="/menu" >
              Menu
            </Nav.Link>
    

       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to ="/">About us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact us
              </NavDropdown.Item>
            </NavDropdown>
</Nav>



      </Container>
    </Navbar>




  
    </div>
  )
}

export default Naviagtion