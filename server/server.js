const express = require('express');
const sequelize = require('./config/connection')


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));


const Menu = require('./models/Menu');


// sets up server and db using sequelize
sequelize.sync().then(()=>{
  app.listen(PORT, ()=>{
    console.log('app is listening')
  })
})


// making sure env variables are accesible
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
