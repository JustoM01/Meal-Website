// Main.js
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './Src.css';

const Main = () => {
  return (
    <div className='Main'>


<h1
   style={{textAlign:'center'}}
   >Welcome</h1>

      <Container fluid style={{ minHeight: 'calc(100vh - 15vh)' }}>
        <Row>
          <Col md={9}>
            <Container className='div-1' style={{ height: '500px' }}></Container>
          </Col>
          <Col md={3}>
            <Container style={{ backgroundColor: 'green', height: '500px' }}>
              No time to make weekly dinners for your family, or just simply looking to switch up your recipes.No subscription needed. This meal prep service fits all of your dietary and lifestyle needs. Book now!
            </Container>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default Main;