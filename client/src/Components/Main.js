import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './Src.css';
import Button from 'react-bootstrap/esm/Button';

import Card from 'react-bootstrap/Card';




const Main = () => {
  return (
    <div className='Main' style={{ display: 'flex',  flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

      <h1 style={{ textAlign: 'center' }}>Welcome</h1>

      <Container fluid style={{ minHeight: 'calc(100vh - 15vh)' }}>
     
            <Container className='div-1' style={{ height: '500px', marginBottom:'40px' }}>
              <div style={{ position:'relative', top:'70px'}} >
              <p style={{textAlign:"center", fontSize:'20px', fontWeight:'800', position:'relative', top:'150px', color:'white'}} >No Time to make weekly dinners or just looking to switch it up try our no subscription weekly meal prep service with a variaty of options for all diets </p>
               <Button style={{position:'relative', top:'150px', left:'45%'}} variant='dark'>Learn More</Button>
               </div>
            </Container>


            <Container className='div-2' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: '400px', backgroundColor: 'white', marginBottom: '20px', borderRadius:'%' }}>
              <h1 style={{textAlign:'center', color:'black'}} >Our Selection</h1>
            
                     
              <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
             <Card.Title>Macro Friendly</Card.Title>
             <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
          </Card.Body>
           </Card>



               <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
             <Card.Title>Vegeterian</Card.Title>
             <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
          </Card.Body>
           </Card>
                         
           <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src="holder.js/100px180" />
             <Card.Body>
             <Card.Title>Family Style</Card.Title>
             <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
          </Card.Body>
           </Card>
                         

                      
            </Container>
         
         
      </Container>

    </div>
  );
}

export default Main;
