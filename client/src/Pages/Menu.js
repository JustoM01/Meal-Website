import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
const image = require('../Components/Food.jpg');

const Menu = () => {
  const [menuData, setMenuData] = useState([]);


// function to call to api using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/menu/all');
        setMenuData(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
        setMenuData([]);
      }
    };

    fetchData(); 
  }, []); 

  return (

    <div className='main-menu' >
   
   <h1
   style={{textAlign:'center'}}
   >Our Selection</h1>

      <div className="row" style={{paddingLeft:'100px'}} >
            {menuData.map((menuItem) => (
          <div key={menuItem.id} className="col-md-4 mb-3" >
              <Card style={{ width: '18rem', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'  }}>
              <Card.Img variant="top" src={image} alt={menuItem.name} />
              <Card.Body>
                <Card.Title>{menuItem.name}</Card.Title>
                <Card.Text>{menuItem.description}</Card.Text>
                <Card.Text>serving size: {menuItem.serving_size}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}

      </div>


    </div>
  );
};

export default Menu;
