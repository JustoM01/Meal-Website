import React from 'react';
import './Src.css'
import Nav from 'react-bootstrap/Nav'



const Footer = () => {
  return (
    <footer className='footer'>

<Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Menu</Nav.Link>
        </Nav.Item>

        


        <Nav.Item>
          <Nav.Link eventKey="link-1">About Us</Nav.Link>
        </Nav.Item>


        <Nav.Item>
          <Nav.Link eventKey="link-1">About Us</Nav.Link>
        </Nav.Item>

    

      </Nav>
      <p className="text-center mt-4 mb-4">@2023 Copyrights reserved</p>
      

    </footer>
  );
};

export default Footer;
