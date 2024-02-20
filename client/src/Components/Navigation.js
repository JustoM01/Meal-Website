import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';



const Naviagtion= () => {
  return (
    <div  style={{marginLeft:'80px', fontSize:'25px', textShadow: '2px 2px 3px rgba(0, 0, 0, 0.5)'}}>  

  


<Navbar >

<Navbar.Brand href="/">Meal Prep</Navbar.Brand>

       <NavDropdown style={{marginLeft:'10px'}} title="MENU" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to ="/">Macro Friendly</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Vegeterian
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to ="/">Family Style</NavDropdown.Item>
              <NavDropdown.Item as={Link} to ="/menu">All</NavDropdown.Item>
            </NavDropdown>
    

       <NavDropdown  style={{marginLeft:'10px'}} title="More" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to ="/">About us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contact us
              </NavDropdown.Item>
            </NavDropdown>

            </Navbar>

            
   




  
    </div>
  )
}

export default Naviagtion